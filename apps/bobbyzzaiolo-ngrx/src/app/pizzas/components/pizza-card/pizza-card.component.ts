import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../../+state/pizzas.interfaces';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {
  @Input() pizza: Pizza;

  @Output() clickPizza = new EventEmitter<Pizza>();

  constructor() {}

  ngOnInit(): void {}

  emit(event): void {
    switch (event) {
      case 'clickPizza':
        this.clickPizza.emit(this.pizza);
    }
  }
}
