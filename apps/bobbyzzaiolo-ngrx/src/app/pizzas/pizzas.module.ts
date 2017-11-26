import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { pizzasReducer } from './+state/pizzas.reducer';
import { pizzasInitialState } from './+state/pizzas.init';
import { PizzasEffects } from './+state/pizzas.effects';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaFormPageComponent } from './containers/pizza-form-page/pizza-form-page.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { PizzasCardsPageComponent } from './containers/pizzas-cards-page/pizzas-cards-page.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { PizzaDetailPageComponent } from './containers/pizza-detail-page/pizza-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pizzas', pizzasReducer, { initialState: pizzasInitialState }),
    EffectsModule.forFeature([PizzasEffects]),

    PizzasRoutingModule
  ],
  declarations: [
    PizzasCardsPageComponent,
    PizzaFormPageComponent,
    PizzaDetailPageComponent,

    PizzaListComponent,
    PizzaFormComponent,
    PizzaCardComponent,
    PizzaDetailComponent
  ],
  providers: [PizzasEffects],
  exports: [PizzasCardsPageComponent, PizzaListComponent]
})
export class PizzasModule {}
