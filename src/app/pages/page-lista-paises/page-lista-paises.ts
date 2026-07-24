import { Component, signal } from '@angular/core';
import { ListaDePaises } from '../../components/lista-de-paises/lista-de-paises';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-lista-paises',
  imports: [ListaDePaises, FormsModule],
  templateUrl: './page-lista-paises.html',
  styleUrl: './page-lista-paises.css',
})
export class PageListaPaises {
  termino = '';
  busquedaActiva = signal('');

  buscar() {
    this.busquedaActiva.set(this.termino);
  }

  limpiar() {
    this.termino = '';
    this.busquedaActiva.set('');
  }
}
