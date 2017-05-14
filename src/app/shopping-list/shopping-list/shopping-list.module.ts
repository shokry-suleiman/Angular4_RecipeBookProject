import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHOPPING_LIST} from "../../services/shopping-list.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    SHOPPING_LIST
  ]
  ,declarations: []
})
export class ShoppingListModule { }
