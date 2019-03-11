import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: IngredientModule[];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ings: IngredientModule[]) => {
           this.ingredients = ings;
        });
    }
    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
