import { TestBed } from '@angular/core/testing';

import { HandleBufferService } from './handle-buffer.service';

describe('HandleErrorService', () => {
  let service: HandleBufferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleBufferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
