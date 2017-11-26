import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ingredientsReducer } from './+state/ingredients.reducer';
import { ingredientsInitialState } from './+state/ingredients.init';
import { IngredientsEffects } from './+state/ingredients.effects';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { ClarityModule } from 'clarity-angular';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientFormPageComponent } from './containers/ingredient-form-page/ingredient-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    StoreModule.forFeature('ingredients', ingredientsReducer, { initialState: ingredientsInitialState }),
    EffectsModule.forFeature([IngredientsEffects]),

    IngredientsRoutingModule
  ],
  declarations: [IngredientFormPageComponent, IngredientListComponent, IngredientFormComponent],
  providers: [IngredientsEffects],
  exports: [IngredientListComponent]
})
export class IngredientsModule {}
