import { TestBed } from '@angular/core/testing';

import { CanActivateUsersGuardService } from './can-activate-guard.service';

describe('CanActivateGuardService', () => {
  let service: CanActivateUsersGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateUsersGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
