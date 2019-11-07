import { TestBed } from '@angular/core/testing';

import { SsdiService } from './ssdi.service';

describe('SsdiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SsdiService = TestBed.get(SsdiService);
    expect(service).toBeTruthy();
  });
});
