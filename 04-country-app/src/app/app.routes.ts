import { Routes } from '@angular/router';
import { HomePageComponent } from './share/pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes').then(m => m.countryRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
