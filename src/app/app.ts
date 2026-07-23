import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ListaDePaises } from './components/lista-de-paises/lista-de-paises';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ListaDePaises, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
