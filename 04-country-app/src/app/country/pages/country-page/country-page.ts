import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../share/components/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformation],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css'
})
export class CountryPageComponent {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({code : this.countryCode}),
    stream : ({params }) => {
      return this.countryService.searchCountryByAlphaCode(params.code);
    }
  })
}
