import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDoneTaskComponent } from './last-done-task.component';

describe('LastDoneTaskComponent', () => {
  let component: LastDoneTaskComponent;
  let fixture: ComponentFixture<LastDoneTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDoneTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDoneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
