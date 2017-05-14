import { Injectable } from '@angular/core';
import {Ingredient} from "../classes/ingredient";

@Injectable()
export class ShoppingListService {
   private items: Array<Ingredient> = [];
  constructor() { }
  getItems() {
    return this.items;
  }

  addItems(items: Array<Ingredient>){
    Array.prototype.push.apply(this.items, items);
  }
}

export const SHOPPING_LIST: Array<any> = [
  { provide: ShoppingListService, useClass: ShoppingListService}
];
