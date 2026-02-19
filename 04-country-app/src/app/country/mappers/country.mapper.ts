import type { RESTCountry } from './../interfaces/rest-country.interface';
import type { Country } from './../interfaces/country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital?.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa']?.common || restCountry.name.common,
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
      area: restCountry.area
    }
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }

}
