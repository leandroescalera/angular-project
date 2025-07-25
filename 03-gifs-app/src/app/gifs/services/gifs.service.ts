import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interface';
import type { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]); // Placeholder for trending gifs

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.gyphyApiKey,
        limit: '20',
        offset: '0',
        rating: 'g',
      }
    }).subscribe((resp) => {
        const gifs = GifMapper.mapperToGiphyItemToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        console.log('Trending Gifs:', gifs);
    })
  }
}
