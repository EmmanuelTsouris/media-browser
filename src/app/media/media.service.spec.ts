import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';

describe('MediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaService = TestBed.inject(MediaService);
    expect(service).toBeTruthy();
  });
});
