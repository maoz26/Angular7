import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../core/header/header.component';
import {HomeComponent} from '../core/home/home.component';
import {SharedModule} from './shared.module';
import {RoutingModule} from '../routing/routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../auth/auth.interceptor';
import {LoggingInterceptor} from '../auth/logging.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RoutingModule
    ],
    exports: [
        RoutingModule,
        HeaderComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    ]
})
export class CoreModule { }
