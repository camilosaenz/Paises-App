import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Organizacion } from '../interfaces/organizacion.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiOrganizacion: string = 'https://restcountries.com/v2';

  get params() {
    return new HttpParams().set(
      'fields',
      'name,capital,flags,population,area,region,alpha2Code,cca2,subregion,continents'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getPaisPorAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  getRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getSubRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/subregion/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getOrganizacion(termino: string): Observable<Organizacion[]> {
    const url = `${this.apiOrganizacion}/regionalbloc/${termino}`;
    return this.http.get<Organizacion[]>(url, { params: this.params });
  }
}
