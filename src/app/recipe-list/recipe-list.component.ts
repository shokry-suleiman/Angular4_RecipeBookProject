import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];

  //recipe:Recipe = new Recipe('men','menStyle','images/shokry.jpg');

  //@Output() recipeSelected: EventEmitter<Recipe>;
  @Output() recipeSelected = new  EventEmitter<Recipe>();



  constructor( private recipeService: RecipeService, private router: Router,
  private actRoute: ActivatedRoute) {
   // this.recipeSelected = new EventEmitter();
  }

  ngOnInit() {

    this.recipeService.changedRecipe.subscribe(
      (recipe: Recipe []) => {
        this.recipes = recipe;

      })

    this.recipes = this.recipeService.getRecipe();
  }

  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.actRoute});
  }
}


