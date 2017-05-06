import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>=[];

  recipe:Recipe = new Recipe('men','menStyle','images/shokry.jpg');

  //@Output() recipeSelected: EventEmitter<Recipe>;
  @Output() recipeSelected = new  EventEmitter<Recipe>();



  constructor() {
   // this.recipeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

}
