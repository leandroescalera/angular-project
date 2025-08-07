import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '@gifs/services/gifs.service';
import { ListBodyComponent } from "@gifs/components/list-body/list-body";

@Component({
  selector: 'app-gif-history-page',
  imports: [ListBodyComponent],
  templateUrl: './gif-history-page.html',
  styleUrl: './gif-history-page.css'
})
export default class GifHistoryPage {

  gifsService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']))
  );

  gifsByQuery = computed(() => {
    return this.gifsService.searchHistory()[this.query() ?? ''];
  })

}


