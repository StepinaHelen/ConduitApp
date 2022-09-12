import { TestBed } from '@angular/core/testing';

import { GlobalFeedService } from './global-feed.service';

describe('GlobalFeedService', () => {
  let service: GlobalFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
