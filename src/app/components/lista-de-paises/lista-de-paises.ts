import { Component, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { TarjetaDePaises } from '../tarjeta-de-paises/tarjeta-de-paises';
import { ServicioPaises } from '../../services/servicio-paises';
import { ModeloPaises } from '../../models/modelo-paises';

@Component({
  selector: 'app-lista-de-paises',
  imports: [TarjetaDePaises],
  templateUrl: './lista-de-paises.html',
  styleUrl: './lista-de-paises.css',
})
export class ListaDePaises implements OnInit, OnChanges {
  @Input() busqueda: string = '';
  @Input() region: string = '';

  private servicio = inject(ServicioPaises);
  paises = signal<ModeloPaises[]>([]);
  cargando = signal(true);
  error = signal(false);

  ngOnInit() {
    this.cargarPaises();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reaccionar cuando cambia la búsqueda o la región (pero no en el primer cambio)
    if (changes['busqueda'] && !changes['busqueda'].firstChange) {
      this.buscar();
    }
    if (changes['region'] && !changes['region'].firstChange) {
      if (this.region) {
        this.filtrarPorRegion();
      } else {
        this.cargarPaises();
      }
    }
  }

  cargarPaises() {
    this.cargando.set(true);
    this.error.set(false);
    this.servicio.getTodos().subscribe({
      next: (data) => {
        this.paises.set(data.sort((a, b) => a.names.common.localeCompare(b.names.common)));
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }

  buscar() {
    if (!this.busqueda.trim()) {
      this.cargarPaises();
      return;
    }
    this.cargando.set(true);
    this.error.set(false);
    this.servicio.buscarPorNombre(this.busqueda).subscribe({
      next: (data) => {
        this.paises.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.paises.set([]);
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }

  filtrarPorRegion() {
    this.cargando.set(true);
    this.error.set(false);
    this.servicio.buscarPorRegion(this.region).subscribe({
      next: (data) => {
        this.paises.set(data.sort((a, b) => a.names.common.localeCompare(b.names.common)));
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }
}
