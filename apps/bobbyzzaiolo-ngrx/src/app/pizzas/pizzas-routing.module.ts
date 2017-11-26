import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaFormPageComponent } from './containers/pizza-form-page/pizza-form-page.component';
import { PizzaDetailPageComponent } from './containers/pizza-detail-page/pizza-detail-page.component';

const routes: Routes = [
  {
    path: 'form',
    component: PizzaFormPageComponent
  },
  {
    path: 'form/:id',
    component: PizzaFormPageComponent
  },
  {
    path: ':id',
    component: PizzaDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule {}
