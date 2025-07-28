import { Component, inject, signal } from '@angular/core';
import { ListBodyComponent } from "@gifs/components/list-body/list-body";
import { GifService } from '../../services/gifs.service';
import { Gif } from '@gifs/interfaces/gif.interface';


@Component({
  selector: 'app-search-page',
  imports: [ListBodyComponent],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export default class SearchPageComponent {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]); // Signal to hold search results

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp); // Update the signal with search results
    });
  }
}
