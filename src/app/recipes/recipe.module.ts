import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientModule} from '../shared/ingredient/ingredient.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecipeModule {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModule[];

  constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModule[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
