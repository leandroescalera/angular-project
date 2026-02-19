import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheByCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheByRegion = new Map<Region, Country[]>();


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    console.log(this.queryCacheByCapital);
    if (this.queryCacheByCapital.has(query)) {
      return of(this.queryCacheByCapital.get(query)!);
    }
    console.log(`LLegando al servidor por primera vez : ${query}`);
    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => { this.queryCacheByCapital.set(query, countries) }),
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
    if (this.queryCacheByCapital.has(query)) {
      return of(this.queryCacheByCapital.get(query)!);
    }
    console.log(`LLegando al servidor por primera vez : ${query}`);

    return this.http
      .get<RESTCountry[]>(url)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => { this.queryCacheCountry.set(query, countries) }),
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

  searchByRegion(region: Region): Observable<Country[]> {
    const url = `${API_URL}/region/${region}`;
    if (this.queryCacheByRegion.has(region)) {
      return of(this.queryCacheByRegion.get(region) ?? []);
    }

    return this.http
      .get<RESTCountry[]>(url)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => { this.queryCacheByRegion.set(region, countries) }),
        catchError((err) => {
          console.error('Error fetching', err);
          return throwError(
            () => new Error(`No se puede obtener paises de esa region ${region}`)
          );
        })
      );
  }
}
