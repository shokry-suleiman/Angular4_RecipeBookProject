import {Component, OnInit, Input, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe : Recipe ;
  constructor(private sls: ShoppingListService) { }
  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
