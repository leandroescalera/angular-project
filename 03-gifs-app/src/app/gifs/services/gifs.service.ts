import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interface';
import type { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  searchingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
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
      this.trendingGifsLoading.set(false);
      console.log('Trending Gifs:', gifs);
    })
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.gyphyApiKey,
        q: query,
        limit: '25',
        offset: '0',
        rating: 'g',
      }
    }).pipe(
      map(({data})=> data),
      map((items) => GifMapper.mapperToGiphyItemToGifArray(items))
      // TODO Historial
    );

  }
}
