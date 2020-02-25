import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDigitDecimalComponent } from './two-digit-decimal.component';

describe('TwoDigitDecimalComponent', () => {
  let component: TwoDigitDecimalComponent;
  let fixture: ComponentFixture<TwoDigitDecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDigitDecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDigitDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
