import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../classes/ingredient";
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'

})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];
  private subscribtion: Subscription;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onEdit(indexe: number) {
  this.sls.startingEditing.next(indexe);
  }

}
