import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioPaises } from '../../services/servicio-paises';
import { ModeloPaises } from '../../models/modelo-paises';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private servicioPaises = inject(ServicioPaises);

  paisesDestacados = signal<ModeloPaises[]>([]);
  cargando = signal(true);

  regions = [
    { name: 'Africa', label: 'África', countries: 54 },
    { name: 'Americas', label: 'América', countries: 35 },
    { name: 'Asia', label: 'Asia', countries: 48 },
    { name: 'Europe', label: 'Europa', countries: 44 },
    { name: 'Oceania', label: 'Oceanía', countries: 14 },
  ];

  ngOnInit() {
    this.servicioPaises.getPaisesDestacados().subscribe({
      next: (paises) => {
        this.paisesDestacados.set(paises);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
      },
    });
  }

  formatPoblacion(poblacion: number): string {
    if (poblacion >= 1_000_000_000) {
      return (poblacion / 1_000_000_000).toFixed(1) + 'B';
    }
    if (poblacion >= 1_000_000) {
      return (poblacion / 1_000_000).toFixed(0) + 'M';
    }
    return poblacion.toLocaleString('es');
  }
}
