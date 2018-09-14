import { TestBed, inject } from '@angular/core/testing';

import { GithubPostserviceService } from './github-postservice.service';

describe('GithubPostserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubPostserviceService]
    });
  });

  it('should be created', inject([GithubPostserviceService], (service: GithubPostserviceService) => {
    expect(service).toBeTruthy();
  }));
});
