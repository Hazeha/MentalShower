import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanAdvancedComponent } from './fan-advanced.component';

describe('FanAdvancedComponent', () => {
  let component: FanAdvancedComponent;
  let fixture: ComponentFixture<FanAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
