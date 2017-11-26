import { Component, Input } from '@angular/core';
import { Pizza } from '../../+state/pizzas.interfaces';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent {
  @Input() pizza: Pizza | null;

  constructor() {}
}
