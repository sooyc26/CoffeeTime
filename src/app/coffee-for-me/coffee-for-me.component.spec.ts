import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeForMeComponent } from './coffee-for-me.component';

describe('CoffeeForMeComponent', () => {
  let component: CoffeeForMeComponent;
  let fixture: ComponentFixture<CoffeeForMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeForMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
