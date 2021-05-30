import { TestBed } from '@angular/core/testing';

import { CanActivateCalenderGuardService } from './can-activate-guard.service';

describe('CanActivateGuardService', () => {
  let service: CanActivateCalenderGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateCalenderGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
