import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailPageComponent } from './pizza-detail-page.component';

describe('PizzaDetailPageComponent', () => {
  let component: PizzaDetailPageComponent;
  let fixture: ComponentFixture<PizzaDetailPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PizzaDetailPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
