import { Injectable } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {RecipeModule} from '../recipes/recipe.module';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    //
    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) { }
    storeRecipes() {
        const req = new HttpRequest(
            'PUT',
            'https://ng-recipe-book-beb48.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),
            {reportProgress: true});
        return this.http.request(req);
    }
    getRecipes() {
        const token = this.authService.getToken();
        this.http.get<RecipeModule[]>(`https://ng-recipe-book-beb48.firebaseio.com/recipes.json?auth=${token}`)
            .pipe(map(recipes => {
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }))
            .subscribe((recipes: RecipeModule[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
