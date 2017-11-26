import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormPageComponent } from './pizza-form-page.component';

describe('PizzaFormPageComponent', () => {
  let component: PizzaFormPageComponent;
  let fixture: ComponentFixture<PizzaFormPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PizzaFormPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
