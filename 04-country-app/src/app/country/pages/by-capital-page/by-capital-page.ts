import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input";
import { CountryListComponent } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);


  onSearch(query: string) {
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryService.searchByCapital(query)
      .subscribe({
        next: (countries) => {
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(`No se encontro un pais con esa capital ${query}`);
        },
      });
  }
}
