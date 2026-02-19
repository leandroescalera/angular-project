import { Component, inject, Query, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list";
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css'
})
export class ByRegionPageComponent {
  countries = signal<RESTCountry[]>([]);

  countryService = inject(CountryService);
  region = signal('');

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<Region | null>(null);


  countryResource = rxResource({
    params: () => ({ query: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryService.searchByRegion(params.query);
    },
  });


  selectRegion(region : Region) {
    this.selectedRegion.set(region);
  }
}
