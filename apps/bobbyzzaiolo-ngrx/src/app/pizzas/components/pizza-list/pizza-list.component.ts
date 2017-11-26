import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../+state/pizzas.interfaces';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  selectedPizzas: Pizza[] = [];

  @Input() pizzas: Pizza[];

  @Output() addPizza = new EventEmitter<void>();
  @Output() editPizza = new EventEmitter<Pizza>();
  @Output() deletePizza = new EventEmitter<Pizza | Pizza[]>();

  emit(eventName) {
    switch (eventName) {
      case 'addPizza':
        this.addPizza.emit();
        break;
      case 'editPizza':
        this.editPizza.emit(this.selectedPizzas[0]);
        break;
      case 'deletePizza':
        this.deletePizza.emit(this.selectedPizzas);
        break;
    }
  }
}
