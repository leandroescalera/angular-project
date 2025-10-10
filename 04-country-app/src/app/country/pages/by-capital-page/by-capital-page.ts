import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input";
import { CountryListComponent } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
