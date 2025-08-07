import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interface';
import type { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage) as Record<string, Gif[]>;
  console.log('Gifs from Local Storage:', gifs);
  return gifs;
}

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  searchingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());

  saveGifsToLocalStorage = effect(() => {
    const historyStorage = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyStorage);
  });

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
      this.trendingGifsLoading.set(false);
      console.log('Trending Gifs:', gifs);
    })
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.gyphyApiKey,
        q: query,
        limit: '25',
        offset: '0',
        rating: 'g',
      }
    }).pipe(
      map(({ data }) => data),
      map((items) => GifMapper.mapperToGiphyItemToGifArray(items)),
      // TODO Historial
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items,
        }));
      })
    );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
