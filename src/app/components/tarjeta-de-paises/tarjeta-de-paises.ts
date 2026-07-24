import { Component, Input } from '@angular/core';
import { DetalleDelPais } from '../detalle-del-pais/detalle-del-pais'; // 📌 Eliminamos el '.component' de la ruta

@Component({
  selector: 'app-tarjeta-de-paises',
  standalone: true,
  imports: [DetalleDelPais], // 📌 Añadimos el componente en el arreglo de imports
  templateUrl: './tarjeta-de-paises.html',
  styleUrl: './tarjeta-de-paises.css'
})
export class TarjetaDePaisesComponent { // 📌 Asegúrate de que el nombre sea "TarjetaDePaisesComponent" o el que use tu equipo
  @Input() pais: any;
  mostrarModal: boolean = false;

  verDetalles() {
    this.mostrarModal = true;
  }

  cerrarDetalles() {
    this.mostrarModal = false;
  }

  formatPoblacion(poblacion: number): string {
    return poblacion.toLocaleString();
  }
}
