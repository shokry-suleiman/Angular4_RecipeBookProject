import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../services/shopping-list.service";
import {Ingredient} from "../classes/ingredient";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'

})
export class ShoppingListAddComponent implements OnInit {

  constructor( private  sls:ShoppingListService) { }

  ngOnInit() {
  }
  //recieving value of NgForm type from the view template

  onSubmit( form: NgForm) {
      const value = form.value;
      const ingredient= new Ingredient(value.name, value.amount);
      this.sls.addItem(ingredient);
  }
}
