import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanContainerComponent } from './fan-container.component';

describe('FanContainerComponent', () => {
  let component: FanContainerComponent;
  let fixture: ComponentFixture<FanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
