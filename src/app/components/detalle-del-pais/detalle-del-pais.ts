<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ServicioPaises } from '../../services/servicio-paises';
import { ModeloPaises } from '../../models/modelo-paises';
>>>>>>> 1c516113e914458aa81cc7855100bf2f627881d4

@Component({
  selector: 'app-detalle-del-pais',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule],
  templateUrl: './detalle-del-pais.html', // 📌 Asegúrate de que diga esto y NO tarjeta-de-paises.html
  styleUrl: './detalle-del-pais.css',
})
export class DetalleDelPais {
  @Input() paisSeleccionado: any;
  @Output() cerrarModal = new EventEmitter<void>();
=======
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-del-pais.html',
  styleUrl: './detalle-del-pais.css',
})
export class DetalleDelPais implements OnInit {
  // Enlazado automáticamente por withComponentInputBinding()
  @Input() id!: string;

  private servicio = inject(ServicioPaises);
  private router = inject(Router);

  pais = signal<ModeloPaises | null>(null);
  cargando = signal(true);
  error = signal(false);

  ngOnInit() {
    this.cargarDetalle();
  }

  cargarDetalle() {
    this.cargando.set(true);
    this.error.set(false);
    this.servicio.getPorCodigo(this.id).subscribe({
      next: (data) => {
        if (!data) {
          this.error.set(true);
        } else {
          this.pais.set(data);
        }
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }

  formatNumber(n: number): string {
    return n ? n.toLocaleString('es') : '0';
  }

  volver() {
    this.router.navigate(['/PageListaPaises']);
  }
>>>>>>> 1c516113e914458aa81cc7855100bf2f627881d4
}
