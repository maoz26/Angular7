import {Component, OnInit} from '@angular/core';
import {RecipeModule} from '../recipe.module';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    id: number;
    recipe: RecipeModule;
    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}
