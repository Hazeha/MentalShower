import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningElementComponent } from './learning-element.component';

describe('LearningElementComponent', () => {
  let component: LearningElementComponent;
  let fixture: ComponentFixture<LearningElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
