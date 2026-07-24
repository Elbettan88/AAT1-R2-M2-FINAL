import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-del-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-del-pais.html', // 📌 Asegúrate de que diga esto y NO tarjeta-de-paises.html
  styleUrl: './detalle-del-pais.css',
})
export class DetalleDelPais {
  @Input() paisSeleccionado: any;
  @Output() cerrarModal = new EventEmitter<void>();
}
