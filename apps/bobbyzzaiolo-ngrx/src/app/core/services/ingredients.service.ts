import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../../ingredients/+state/ingredients.interfaces';
import { SocketService } from './socket.service';

@Injectable()
export class IngredientsService {
  private url = 'https://bobbyzzaiolo-node-goulaheau.c9users.io/ingredients';

  ingredientCreated$: Observable<Ingredient>;
  ingredientUpdated$: Observable<Ingredient>;
  ingredientRemoved$: Observable<Ingredient>;

  constructor(private http: HttpClient,
              private socketService: SocketService) {
    this.ingredientCreated$ = this.socketService.listen('[Ingredient] Created');
    this.ingredientUpdated$ = this.socketService.listen('[Ingredient] Updated');
    this.ingredientRemoved$ = this.socketService.listen('[Ingredient] Removed');
  }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url);
  }

  get(id: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.url}/${id}`);
  }

  post(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.url, ingredient);
  }

  put(id: string, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.url}/${id}`, ingredient);
  }

  patch(id: string, ingredient: Partial<Ingredient>): Observable<Ingredient> {
    return this.http.patch<Ingredient>(`${this.url}/${id}`, ingredient);
  }

  delete(id: string): Observable<Ingredient> {
    return this.http.delete<Ingredient>(`${this.url}/${id}`);
  }
}
