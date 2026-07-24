import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloPaises } from '../models/modelo-paises';

@Injectable({
  providedIn: 'root',
})
export class ServicioPaises {
  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  // Obtener todos los países
  getTodos(): Observable<ModeloPaises[]> {
    return this.http.get<ModeloPaises[]>(
      `${this.apiUrl}/all?fields=name,capital,region,population,flags,cca3`
    );
  }

  // Buscar por nombre
  buscarPorNombre(nombre: string): Observable<ModeloPaises[]> {
    return this.http.get<ModeloPaises[]>(
      `${this.apiUrl}/name/${nombre}?fields=name,capital,region,population,flags,cca3`
    );
  }

  // Buscar por región
  buscarPorRegion(region: string): Observable<ModeloPaises[]> {
    return this.http.get<ModeloPaises[]>(
      `${this.apiUrl}/region/${region}?fields=name,capital,region,population,flags,cca3`
    );
  }

  // Obtener países destacados por código
  getPaisesDestacados(): Observable<ModeloPaises[]> {
    const codigos = 'MEX,FRA,JPN,BRA,ZAF,AUS';
    return this.http.get<ModeloPaises[]>(
      `${this.apiUrl}/alpha?codes=${codigos}&fields=name,capital,region,population,flags,cca3`
    );
  }
}
