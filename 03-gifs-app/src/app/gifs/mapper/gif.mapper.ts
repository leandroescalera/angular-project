import { Gif } from "@gifs/interfaces/gif.interface";
import { GiphyItem } from "@gifs/interfaces/giphy.interfaces";


export class GifMapper {

  static mapperToGiphyItemToGif(item: GiphyItem) : Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    };
  }

  static mapperToGiphyItemToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(item => this.mapperToGiphyItemToGif(item));
  }

}
