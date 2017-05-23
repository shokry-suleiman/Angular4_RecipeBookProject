import {Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../services/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
   selectedRecipe : Recipe ;
   id: number;

  constructor(private sls: ShoppingListService,
              private recipeService: RecipeService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {

    this.actRoute.params.subscribe(( params: Params )=> {
          this.id = +params['id'];
          this.selectedRecipe = this.recipeService.getRecipes(this.id);
    });
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
