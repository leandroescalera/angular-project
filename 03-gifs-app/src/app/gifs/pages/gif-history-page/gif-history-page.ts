import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-gif-history-page',
  imports: [],
  templateUrl: './gif-history-page.html',
  styleUrl: './gif-history-page.css'
})
export default class GifHistoryPage {

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query']))
  );

}


