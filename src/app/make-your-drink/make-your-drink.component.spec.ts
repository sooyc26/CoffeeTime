import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourDrinkComponent } from './make-your-drink.component';

describe('MakeYourDrinkComponent', () => {
  let component: MakeYourDrinkComponent;
  let fixture: ComponentFixture<MakeYourDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeYourDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeYourDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
