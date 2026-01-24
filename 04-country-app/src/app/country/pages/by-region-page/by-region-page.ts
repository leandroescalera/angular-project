import { Component, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list";
import { RESTCountry } from '../../interfaces/rest-country.interface';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css'
})
export class ByRegionPageComponent {
  countries = signal<RESTCountry[]>([]);
}
