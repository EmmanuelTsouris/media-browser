import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MediaService } from '../media/media.service';
import { Media } from '../media/media';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  media$: Observable<Media>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MediaService
  ) {}

  ngOnInit() {
    this.media$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMedia(params.get('id')))
    );
  }

  gotoWatch(media: Media) {
    const mediaId = media ? media.id : null;
    this.router.navigate(['/watch', { id: mediaId }]);
  }
}
