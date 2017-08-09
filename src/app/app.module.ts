import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RECIPE_SERVICE} from "./services/recipe.service";
import {SHOPPING_LIST} from "./services/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {DataStorage_Service} from "./services/data-storage.service";
import { AUTH_SERVICE } from './auth/auth.service';
import {AUTH_GUARD_SERVICE} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";



@NgModule({
  declarations: [
    //That's Good When MY AppModule Contain Only The AppComponent That I use
    //THe featureModule.............
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShoppingListModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  providers: [ RECIPE_SERVICE,
  SHOPPING_LIST, DataStorage_Service,  AUTH_SERVICE, AUTH_GUARD_SERVICE ],
  bootstrap: [AppComponent]
})
export class AppModule { }
