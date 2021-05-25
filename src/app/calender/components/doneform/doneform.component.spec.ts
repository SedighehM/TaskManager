import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneformComponent } from './doneform.component';

describe('DoneformComponent', () => {
  let component: DoneformComponent;
  let fixture: ComponentFixture<DoneformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
