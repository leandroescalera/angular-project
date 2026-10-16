import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'hero-page-component',
  styleUrl: './hero-page.component.css',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);


  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(30);
  }

  resetHero() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(22);
  }

}
