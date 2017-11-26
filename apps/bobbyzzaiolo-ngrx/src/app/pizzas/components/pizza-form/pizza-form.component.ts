import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../../+state/pizzas.interfaces';
import { Ingredient } from '../../../ingredients/+state/ingredients.interfaces';

@Component({
  selector   : 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls  : ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit, OnChanges {
  pizzaForm = new FormGroup({
    name       : new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price      : new FormControl(10, Validators.required)
  });

  pizzaIngredients: Ingredient[] = [];
  pizzaImage                     = '';

  @Input() pizza: Pizza | null;
  @Input() ingredients: Ingredient[];

  @Output() createPizza = new EventEmitter<Pizza>();
  @Output() updatePizza = new EventEmitter<{
    id: string;
    pizza: Partial<Pizza>;
  }>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pizza']) {
      if (this.pizza) {
        this.pizzaForm.patchValue(this.pizza);
        this.pizzaIngredients = this.pizza.ingredients;
        this.pizzaImage       = this.pizza.image;
      }
    }
  }

  onSubmit(): void {
    const pizza: Pizza = {
      name       : this.pizzaForm.value.name,
      description: this.pizzaForm.value.description,
      price      : this.pizzaForm.value.price,
      image      : this.pizzaImage,
      ingredients: []
    };

    this.pizzaIngredients.forEach((ingredient: Ingredient) => pizza.ingredients.push(ingredient._id));

    if (this.pizza) {
      this.updatePizza.emit({
        id   : this.pizza._id,
        pizza: pizza
      });
    } else {
      this.createPizza.emit(pizza);
    }
  }

  onClickIngredient(ingredient: Ingredient): void {
    let found = false;

    for (const i in this.pizzaIngredients) {
      if (this.pizzaIngredients[i]._id === ingredient._id) {
        found = true;
        this.pizzaIngredients.splice(+i, 1);
        break;
      }
    }

    if (!found) {
      this.pizzaIngredients.push(ingredient);
    }
  }

  onChangeImage(event): void {
    const myReader = new FileReader();

    myReader.readAsDataURL(event.target.files[0]);

    myReader.onloadend = () => {
      this.pizzaImage = myReader.result;
    };
  }

  isClicked(ingredient: Ingredient): string {
    for (const i in this.pizzaIngredients) {
      if (this.pizzaIngredients[i]._id === ingredient._id) {
        return 'btn-primary';
      }
    }
    return 'btn-outline';
  }
}
