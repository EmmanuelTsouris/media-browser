import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MediaService } from '../media/media.service';
import { Media } from '../media/media';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  mediaFiles$: Observable<Media[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MediaService
  ) { }

  ngOnInit() {
    this.mediaFiles$ = this.route.paramMap.pipe(
      switchMap(params => {
        const mediaList = this.service.getMediaList();
        return mediaList;
      })
    );
  }

}
