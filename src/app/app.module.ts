import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';

// project parts modules
import {SharedModule} from './modules/shared.module';
import {ShoppingListModule} from './modules/shopping-list.module';
import {AuthModule} from './modules/auth.module';
import {CoreModule} from './modules/core.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        SharedModule,
        ShoppingListModule,
        AuthModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
