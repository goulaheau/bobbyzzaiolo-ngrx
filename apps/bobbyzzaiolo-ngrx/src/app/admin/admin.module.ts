import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { AdminRoutingModule } from './admin-routing.module';
import { PizzasModule } from '../pizzas/pizzas.module';

@NgModule({
  imports: [CommonModule, IngredientsModule, PizzasModule, AdminRoutingModule],
  declarations: [AdminPageComponent]
})
export class AdminModule {}
