import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesComponent} from '../recipes/recipes.component';
import {RecipeStartComponent} from '../recipes/recipe-start/recipe-start.component';
import {RecipeListComponent} from '../recipes/recipe-list/recipe-list.component';
import {RecipeEditComponent} from '../recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from '../recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from '../recipes/recipe-list/recipe-item/recipe-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from '../recipes/recipes-routing/recipes-routing.module';
import {SharedModule} from './shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule { }
