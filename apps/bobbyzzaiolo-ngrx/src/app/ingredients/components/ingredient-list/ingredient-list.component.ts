import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../+state/ingredients.interfaces';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  selectedIngredients: Ingredient[] = [];

  @Input() ingredients: Ingredient[];

  @Output() addIngredient = new EventEmitter<void>();
  @Output() editIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<Ingredient | Ingredient[]>();

  emit(event) {
    switch (event) {
      case 'addIngredient':
        this.addIngredient.emit();
        break;
      case 'editIngredient':
        this.editIngredient.emit(this.selectedIngredients[0]);
        break;
      case 'deleteIngredient':
        this.deleteIngredient.emit(this.selectedIngredients);
        break;
    }
  }
}
