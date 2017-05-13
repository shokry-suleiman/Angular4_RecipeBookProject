import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../services/recipe.service";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];

  //recipe:Recipe = new Recipe('men','menStyle','images/shokry.jpg');

  //@Output() recipeSelected: EventEmitter<Recipe>;
  @Output() recipeSelected = new  EventEmitter<Recipe>();



  constructor( private recipeService: RecipeService) {
   // this.recipeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

}
