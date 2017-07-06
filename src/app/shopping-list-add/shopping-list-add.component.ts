import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../services/shopping-list.service";
import {Ingredient} from "../classes/ingredient";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'

})
export class ShoppingListAddComponent implements OnInit, OnDestroy {
  // Subscription used for handling subscriber
  subscription: Subscription;
  editedItem: number;
  editedMode = false;
  Item: Ingredient;

  //for selecting local variable(f) from the view template .
  @ViewChild('f') slsForm:NgForm;

  constructor( private  sls:ShoppingListService) { }

  ngOnInit() {

    //subscribing observable (subscribe data that have been  sent to observable)
    this.subscription =this.sls.startingEditing.subscribe( ( index: number) => {
        this.editedItem = index;
        this.editedMode = true;

        //retrieving item from array of ingredent(items)
        this.Item = this.sls.getItem(this.editedItem);

        this.slsForm.setValue({
          name: this.Item.name,
          amount: this.Item.amount
        })
    });


  }
  //recieving value of NgForm type from the view template

  onSubmit( form: NgForm) {
      const value = form.value;
      const ingredient= new Ingredient(value.name, value.amount);
      this.sls.addItem(ingredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
