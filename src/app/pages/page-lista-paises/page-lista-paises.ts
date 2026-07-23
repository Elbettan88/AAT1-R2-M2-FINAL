import { Component } from '@angular/core';
import { ListaDePaises } from '../../components/lista-de-paises/lista-de-paises';

@Component({
  selector: 'app-page-lista-paises',
  imports: [ListaDePaises],
  templateUrl: './page-lista-paises.html',
  styleUrl: './page-lista-paises.css',
})
export class PageListaPaises {}
