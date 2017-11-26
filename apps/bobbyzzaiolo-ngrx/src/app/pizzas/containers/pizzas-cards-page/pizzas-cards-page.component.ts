import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../../+state/pizzas.interfaces';
import { PizzasStoreService } from '../../../core/services/pizzas-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizzas-cards-page',
  templateUrl: './pizzas-cards-page.component.html',
  styleUrls: ['./pizzas-cards-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PizzasCardsPageComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private pizzasStoreService: PizzasStoreService, private router: Router) {}

  ngOnInit() {
    this.pizzas$ = this.pizzasStoreService.pizzas$;
  }

  onClickPizza(pizza: Pizza): void {
    this.router.navigate([`pizzas/${pizza._id}`]);
  }
}
