import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./share/components/footer/footer";
import { TopMenuComponent } from './country/components/top-menu/top-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected title = 'country-app';
}
