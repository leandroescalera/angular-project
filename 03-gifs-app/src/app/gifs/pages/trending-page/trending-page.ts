import { Component } from '@angular/core';
import { ListBodyComponent } from "@gifs/components/list-body/list-body";

@Component({
  selector: 'app-trending-page',
  imports: [ListBodyComponent],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPageComponent {
  // This component is used to display trending GIFs.
  // It can be enhanced with additional functionality in the future.

}
