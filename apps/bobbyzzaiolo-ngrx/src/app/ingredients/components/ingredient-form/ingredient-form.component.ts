import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../+state/ingredients.interfaces';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnChanges {
  ingredientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    price: new FormControl(1, Validators.required)
  });

  @Input() ingredient: Ingredient | null;

  @Output() createIngredient = new EventEmitter<Ingredient>();
  @Output() updateIngredient = new EventEmitter<{ id: string; ingredient: Partial<Ingredient> }>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ingredient']) {
      if (this.ingredient) {
        this.ingredientForm.patchValue(this.ingredient);
      }
    }
  }

  onSubmit() {
    const ingredient: Ingredient = {
      name: this.ingredientForm.value.name,
      weight: this.ingredientForm.value.weight,
      price: this.ingredientForm.value.price
    };

    if (this.ingredient) {
      this.updateIngredient.emit({
        id: this.ingredient._id,
        ingredient: ingredient
      });
    } else {
      this.createIngredient.emit(ingredient);
    }
  }
}
