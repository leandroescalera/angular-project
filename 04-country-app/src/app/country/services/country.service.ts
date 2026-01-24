import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError((err) => {
          console.error('Error fetching', err);
          return throwError(
            () => new Error(`No se puede obtener paises con ese query ${query}`)
          );
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase();
    return this.http
      .get<RESTCountry[]>(url)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        delay(1500),
        catchError((err) => {
          console.error('Error fetching', err);
          return throwError(
            () => new Error(`No se puede obtener paises con ese query ${query}`)
          );
        })
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${API_URL}/alpha/${code}`;

    return this.http
      .get<RESTCountry[]>(url)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        map((countries) => countries.at(0) ? countries : []),
        catchError((err) => {
          console.error('Error fetching', err);
          return throwError(
            () => new Error(`No se puede obtener paises con ese codigo ${code}`)
          );
        })
      );
  }
}
