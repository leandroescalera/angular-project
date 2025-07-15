import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from '../../components/side-menu-header/side-menu-header';
import { SideMenuOptionsComponent } from '../../components/side-menu-options/side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenuComponent {

}
