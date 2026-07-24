import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ModeloPaises } from '../models/modelo-paises';

// Estructura real que devuelve la API v5
interface ApiV5Response {
  data: {
    objects: ModeloPaises[];
    meta: {
      total: number;
      count: number;
    };
  };
}

interface ApiV5Single {
  data: ModeloPaises;
}

@Injectable({
  providedIn: 'root',
})
export class ServicioPaises {
  private http = inject(HttpClient);
  private apiUrl = '/api/countries/v5';
  private token = 'rc_live_0f9a757f945c4fab9ae7163df3179793';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getTodos(): Observable<ModeloPaises[]> {
    return this.http.get<ApiV5Response>(
      `${this.apiUrl}?limit=250&fields=names,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data.objects)
    );
  }

  buscarPorNombre(nombre: string): Observable<ModeloPaises[]> {
    return this.http.get<ApiV5Response>(
      `${this.apiUrl}?q=${nombre}&fields=names,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data.objects)
    );
  }

  buscarPorRegion(region: string): Observable<ModeloPaises[]> {
    return this.http.get<ApiV5Response>(
      `${this.apiUrl}?region=${region}&limit=250&fields=names,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data.objects)
    );
  }

  getPaisesDestacados(): Observable<ModeloPaises[]> {
    const codigos = 'MEX,FRA,JPN,BRA,ZAF,AUS';
    return this.http.get<ApiV5Response>(
      `${this.apiUrl}?codes=${codigos}&fields=names,capitals,region,population,flag,codes`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data.objects)
    );
  }

  getPorCodigo(codigo: string): Observable<ModeloPaises> {
    return this.http.get<ApiV5Single>(
      `${this.apiUrl}/${codigo}?fields=names,capitals,region,subregion,population,flag,codes,area,languages,currencies,continents,borders,classification,links`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data)
    );
  }
}
