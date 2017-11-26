import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientFormPageComponent } from './ingredient-form-page.component';

describe('IngredientFormPageComponent', () => {
  let component: IngredientFormPageComponent;
  let fixture: ComponentFixture<IngredientFormPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IngredientFormPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
