import { Component, computed, inject, signal } from '@angular/core';
import { ListBodyComponent } from "@gifs/components/list-body/list-body";
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [ListBodyComponent],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPageComponent {

  gifService = inject(GifService);
  gifs = computed(() => this.gifService.trendingGifs());
}
