import { Injectable } from '@angular/core';
import {Ingredient} from "../classes/ingredient";
import {Subject} from "rxjs";


@Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject< Ingredient[]>();

  // creating Subject which is an observable with intial value
  //array for saving asyncronous data

  startingEditing = new Subject<number>();
  private items: Array<Ingredient> = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatomes', 20)
  ];

  constructor() {
  }


  getItems() {
    return this.items;
  }

  getItem(index: number) {
    return this.items[index]
  }

  addItems(items: Array<Ingredient>) {
    this.items.push(...items);
    this.ingredientChanged.next(this.items.slice());
  }

  addItem(item: Ingredient) {
    this.items.push(item);
    this.ingredientChanged.next(this.items.slice());
  }

  //update items in shopping list by triggering index of item and  and new item
  //for updating

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.items[index] = newIngredient;
    //sending new item to observable
    this.ingredientChanged.next(this.items.slice());
  }
}
export const SHOPPING_LIST: Array<any> = [
  { provide: ShoppingListService, useClass: ShoppingListService}
];
