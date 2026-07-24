import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloPaises } from '../../models/modelo-paises';

@Component({
  selector: 'app-tarjeta-de-paises',
  imports: [],
  templateUrl: './tarjeta-de-paises.html',
  styleUrl: './tarjeta-de-paises.css',
})
export class TarjetaDePaises {
  @Input() pais!: ModeloPaises;

  constructor(private router: Router) {}

  verDetalles() {
    this.router.navigate(['/pais', encodeURIComponent(this.pais.names.common)]);
  }

  formatPoblacion(n: number): string {
    if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'B';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(0) + 'M';
    return n.toLocaleString('es');
  }
}
