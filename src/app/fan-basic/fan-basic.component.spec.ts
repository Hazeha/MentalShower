import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanBasicComponent } from './fan-basic.component';

describe('FanBasicComponent', () => {
  let component: FanBasicComponent;
  let fixture: ComponentFixture<FanBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
