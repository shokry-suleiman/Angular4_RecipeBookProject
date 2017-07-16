import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import {Ingredient} from "../classes/ingredient";
import {Subject} from "rxjs";

@Injectable()

export class RecipeService {

  changedRecipe = new Subject<Recipe[]>();
  private  recipes: Array<Recipe> = [
    new Recipe('Tasty Schnitzel','A super-tasty Schnitzel - just awesome!','https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Big Fat Burger','What else you need to say?','https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',[

      new Ingredient('Buns',2),
      new Ingredient('Meat', 1)
    ])

  ];

  constructor() { }

getRecipe(){

    return this.recipes;
}

getRecipes( index: number ) {

  return this.recipes[index];
}

addRecipe(recipe: Recipe){

  this.recipes.push(recipe);
  this.changedRecipe.next(this.recipes.slice());
}

updateRecipe(index: number, recipe: Recipe){

  this.recipes[index] = recipe;
  this.changedRecipe.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.changedRecipe.next(this.recipes.slice());
}
setRecipes(recipes: Recipe[]) {
  this.recipes = recipes;
  this.changedRecipe.next(this.recipes.slice());
}

}

export const RECIPE_SERVICE: Array<any> = [
  { provide:RecipeService, useClass: RecipeService}
];
