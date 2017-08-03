import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListAddComponent} from "./shopping-list-add/shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {SharedModule} from "../shared/shared.module";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent

]
})
export class ShoppingListModule { }
