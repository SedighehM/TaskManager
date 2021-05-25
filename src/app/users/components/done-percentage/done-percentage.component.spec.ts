import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonePercentageComponent } from './done-percentage.component';

describe('DonePercentageComponent', () => {
  let component: DonePercentageComponent;
  let fixture: ComponentFixture<DonePercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonePercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
