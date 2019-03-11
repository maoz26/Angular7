import {Injectable} from '@angular/core';
import {RecipeModule} from '../recipes/recipe.module';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from './shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeChanged = new Subject<RecipeModule[]>();
    private recipes: RecipeModule[] = [
        new RecipeModule(
            'A test Recipe',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new IngredientModule('Meat', 1),
                new IngredientModule('Chicken', 2),
            ]
        ),
        new RecipeModule(
            'Recipe 2',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new IngredientModule('milk', 10),
                new IngredientModule('eggs', 20),
            ]
        )
    ];
    constructor(private shoppingListService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientToShoppingList(ings: IngredientModule[]) {
        this.shoppingListService.addIngredients(ings);
    }
    addRecipe(recipe: RecipeModule) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: RecipeModule) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
    setRecipes(recipes: RecipeModule[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
}
