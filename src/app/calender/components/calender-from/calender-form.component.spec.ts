import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderFormComponent } from './calender-form.component';

describe('CalenderFromComponent', () => {
  let component: CalenderFormComponent;
  let fixture: ComponentFixture<CalenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
