import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input";
import { CountryListComponent } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe(resp => {
      console.log(resp);
    });
  }
}
