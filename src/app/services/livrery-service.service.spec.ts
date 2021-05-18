import { TestBed } from '@angular/core/testing';

import { LivreryServiceService } from './livrery-service.service';

describe('LivreryServiceService', () => {
  let service: LivreryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
