import { Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
  styleUrl: './country-information.css'
})
export class CountryInformation {
    country = input.required<Country>();

    currentYear = computed(() => new Date().getFullYear());
}
