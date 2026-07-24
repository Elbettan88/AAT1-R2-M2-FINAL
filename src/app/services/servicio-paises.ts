import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ModeloPaises } from '../models/modelo-paises';

@Injectable({
  providedIn: 'root',
})
export class ServicioPaises {
  private http = inject(HttpClient);
  private apiUrl = '/api/countries/v5';
  // Actualizado con el token exacto provisto por el usuario
  private token = 'rc_live_e4a6ea15c5f5417fbd53433f61d843ec';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getTodos(): Observable<ModeloPaises[]> {
    return this.http.get<{ data: ModeloPaises[] }>(
      `${this.apiUrl}?limit=250&fields=name,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }

  buscarPorNombre(nombre: string): Observable<ModeloPaises[]> {
    return this.http.get<{ data: ModeloPaises[] }>(
      `${this.apiUrl}?q=${nombre}&fields=name,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }

  buscarPorRegion(region: string): Observable<ModeloPaises[]> {
    return this.http.get<{ data: ModeloPaises[] }>(
      `${this.apiUrl}?region=${region}&limit=250&fields=name,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }

  getPaisesDestacados(): Observable<ModeloPaises[]> {
    const codigos = 'MEX,FRA,JPN,BRA,ZAF,AUS';
    return this.http.get<{ data: ModeloPaises[] }>(
      `${this.apiUrl}?codes=${codigos}&fields=name,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }

  getPorCodigo(codigo: string): Observable<ModeloPaises> {
    return this.http.get<{ data: ModeloPaises }>(
      `${this.apiUrl}/${codigo}?fields=name,capitals,region,subregion,population,flag,codes,area,languages,currencies,continents,borders,classification,links`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }
}
