import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'lista-de-paises',
    loadComponent: () =>
      import('./pages/lista-de-paises/lista-de-paises').then(
        (m) => m.ListaDePaises
      ),
  },
  {
    path: 'acerca-de',
    loadComponent: () =>
      import('./pages/acerca-de/acerca-de').then((m) => m.AcercaDe),
  },
  { path: '**', redirectTo: '' },
];
