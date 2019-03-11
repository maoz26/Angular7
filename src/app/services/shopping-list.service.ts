import { Injectable } from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModule[]>();
  startedEditing = new Subject<number>();
  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 5),
    new IngredientModule('Tomatoes', 10),
  ];
  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ing: IngredientModule) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ings: IngredientModule[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
