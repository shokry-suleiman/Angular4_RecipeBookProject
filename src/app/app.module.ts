import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RECIPE_SERVICE} from "./services/recipe.service";
import {SHOPPING_LIST} from "./services/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {DataStorage_Service} from "./services/data-storage.service";
import { AUTH_SERVICE } from './auth/auth.service';
import {AUTH_GUARD_SERVICE} from "./auth/auth-guard.service";
import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ RECIPE_SERVICE,
  SHOPPING_LIST, DataStorage_Service,  AUTH_SERVICE, AUTH_GUARD_SERVICE ],
  bootstrap: [AppComponent]
})
export class AppModule { }
