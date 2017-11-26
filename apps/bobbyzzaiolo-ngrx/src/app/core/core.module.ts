import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasService } from './services/pizzas.service';
import { IngredientsService } from './services/ingredients.service';
import { PizzasStoreService } from './services/pizzas-store.service';
import { IngredientsStoreService } from './services/ingredients-store.service';
import { AlertComponent } from './components/alert/alert.component';
import { ClarityModule } from 'clarity-angular';
import { AlertService } from './services/alert.service';
import { SocketService } from './services/socket.service';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        SocketService,
        AlertService,
        PizzasService,
        IngredientsService,
        PizzasStoreService,
        IngredientsStoreService
      ]
    };
  }
}
