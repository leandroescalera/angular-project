import { Component, input } from '@angular/core';
import { ListItemBodyComponent } from "../list-item-body/list-item-body";


@Component({
  selector: 'gifs-list-body',
  imports: [ListItemBodyComponent],
  templateUrl: './list-body.html',
  styleUrl: './list-body.css'
})
export class ListBodyComponent {
  gifs = input.required<string[]>();
}
