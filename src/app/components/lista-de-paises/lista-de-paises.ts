import { Component } from '@angular/core';
import { TarjetaDePaises } from '../tarjeta-de-paises/tarjeta-de-paises';

@Component({
  selector: 'app-lista-de-paises',
  imports: [TarjetaDePaises],
  templateUrl: './lista-de-paises.html',
  styleUrl: './lista-de-paises.css',
})
export class ListaDePaises {}
