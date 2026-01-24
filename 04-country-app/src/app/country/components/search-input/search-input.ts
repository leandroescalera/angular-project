import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css'
})
export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
}
