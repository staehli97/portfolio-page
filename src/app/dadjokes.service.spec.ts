import { TestBed } from '@angular/core/testing';

import { DadjokesService } from './dadjokes.service';

describe('DadjokesService', () => {
  let service: DadjokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadjokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
