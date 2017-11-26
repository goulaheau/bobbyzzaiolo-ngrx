import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientFormPageComponent } from './containers/ingredient-form-page/ingredient-form-page.component';

const routes: Routes = [
  {
    path: 'form',
    component: IngredientFormPageComponent
  },
  {
    path: 'form/:id',
    component: IngredientFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule {}
