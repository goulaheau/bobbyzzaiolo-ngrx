import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../../+state/ingredients.interfaces';
import { IngredientsStoreService } from '../../../core/services/ingredients-store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector   : 'app-ingredient-form-page',
  templateUrl: './ingredient-form-page.component.html',
  styleUrls  : ['./ingredient-form-page.component.css']
})
export class IngredientFormPageComponent implements OnInit {
  ingredient$: Observable<Ingredient | null>;

  constructor(private route: ActivatedRoute,
              private ingredientsStoreService: IngredientsStoreService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.ingredient$ = this.ingredientsStoreService.getIngredient(id);
    } else {
      this.ingredient$ = null;
    }
  }

  onCreateIngredient(ingredient: Ingredient) {
    this.ingredientsStoreService.createIngredient(ingredient);
  }

  onUpdateIngredient(values: { id: string; ingredient: Ingredient }) {
    this.ingredientsStoreService.updateIngredient(values.id, values.ingredient);
  }
}
