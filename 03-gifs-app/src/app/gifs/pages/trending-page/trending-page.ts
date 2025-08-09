import { Component, computed, inject} from '@angular/core';
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPageComponent {
  gifService = inject(GifService);
  gifs = computed(() => this.gifService.trendingGifs());
}
