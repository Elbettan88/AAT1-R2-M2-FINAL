import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AcercaDe } from './pages/acerca-de/acerca-de';
import { PageListaPaises } from './pages/page-lista-paises/page-lista-paises';
import { DetalleDelPais } from './components/detalle-del-pais/detalle-del-pais';
import { Pagina404 } from './pages/pagina404/pagina404';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'PageListaPaises',
    component: PageListaPaises,
  },
  {
    path: 'AcercaDe',
    component: AcercaDe,
  },
  {
    path: 'pais/:id',
    component: DetalleDelPais,
  },
  {
    path: '404',
    component: Pagina404,
  },
  {
    path: '**',
    component: Pagina404,
  },
];
