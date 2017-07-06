import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../classes/ingredient";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'

})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onEdit(indexe: number) {
  this.sls.startingEditing.next(indexe);
  }

}
