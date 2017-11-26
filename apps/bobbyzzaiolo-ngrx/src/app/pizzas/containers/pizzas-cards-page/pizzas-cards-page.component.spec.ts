import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasCardsPageComponent } from './pizzas-cards-page.component';

describe('PizzasCardsPageComponent', () => {
  let component: PizzasCardsPageComponent;
  let fixture: ComponentFixture<PizzasCardsPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PizzasCardsPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
