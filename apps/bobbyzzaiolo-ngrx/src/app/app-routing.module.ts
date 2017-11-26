import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PizzasCardsPageComponent } from './pizzas/containers/pizzas-cards-page/pizzas-cards-page.component';

const modulesLocation = 'apps/bobbyzzaiolo-ngrx/src/app';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: PizzasCardsPageComponent
      },
      {
        path: 'admin',
        loadChildren: `${modulesLocation}/admin/admin.module#AdminModule`
      },
      {
        path: 'pizzas',
        loadChildren: `${modulesLocation}/pizzas/pizzas.module#PizzasModule`
      },
      {
        path: 'ingredients',
        loadChildren: `${modulesLocation}/ingredients/ingredients.module#IngredientsModule`
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
