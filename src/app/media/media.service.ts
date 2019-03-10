import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Media } from './media';
import { MediaList } from './mock-medialist';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  getMediaList(): Observable<Media[]> {
    return of(MediaList);
  }

  getMedia(id: number | string) {
    return this.getMediaList().pipe(
      // (+) before `id` turns the string into a number
      map((mediaList: Media[]) => mediaList.find(media => media.id === +id))
    );
  }
}
