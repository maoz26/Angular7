import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { IngredientModule } from '../../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../../services/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: IngredientModule;
    constructor(private shoppingListService: ShoppingListService) { }
    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }
    onSubmit(form: NgForm) {
        const value = form.value;
        const newIngredient = new IngredientModule(value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
