import { TestBed } from '@angular/core/testing';

import { TwitterServiceService } from './twitter-service.service';

describe('TwitterServiceService', () => {
  let service: TwitterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
