import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkServiceComponent } from './drink-service.component';

describe('DrinkServiceComponent', () => {
  let component: DrinkServiceComponent;
  let fixture: ComponentFixture<DrinkServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
