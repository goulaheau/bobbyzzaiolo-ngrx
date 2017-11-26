import { TestBed, inject } from '@angular/core/testing';

import { PizzasService } from './pizzas.service';

describe('PizzasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzasService]
    });
  });

  it(
    'should be created',
    inject([PizzasService], (service: PizzasService) => {
      expect(service).toBeTruthy();
    })
  );
});
