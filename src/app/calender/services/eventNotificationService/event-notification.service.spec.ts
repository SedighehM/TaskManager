import { TestBed } from '@angular/core/testing';

import { EventNotificationService } from './event-notification.service';

describe('EventNotificationService', () => {
  let service: EventNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
