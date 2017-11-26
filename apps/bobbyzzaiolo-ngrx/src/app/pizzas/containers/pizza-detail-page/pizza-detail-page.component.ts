import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../../+state/pizzas.interfaces';
import { PizzasStoreService } from '../../../core/services/pizzas-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-detail-page',
  templateUrl: './pizza-detail-page.component.html',
  styleUrls: ['./pizza-detail-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PizzaDetailPageComponent implements OnInit {
  pizza$: Observable<Pizza | null>;

  constructor(private route: ActivatedRoute, private pizzasStoreService: PizzasStoreService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pizza$ = this.pizzasStoreService.getPizza(id);
    } else {
      this.pizza$ = null;
    }
  }
}
