import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../recipes.component';
import {RecipeStartComponent} from '../recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../../auth/auth-guard.service';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
        ]
    },
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule { }
