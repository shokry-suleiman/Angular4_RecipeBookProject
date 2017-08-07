import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";

const shoppingListRoutes: Routes = [

  { path: '', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule { }
