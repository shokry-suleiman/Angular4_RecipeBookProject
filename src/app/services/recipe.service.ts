import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import {Ingredient} from "../classes/ingredient";

@Injectable()

export class RecipeService {

  private  recipes: Array<Recipe> = [
    new Recipe('Tasty Schnitzel','A super-tasty Schnitzel - just awesome!','https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Big Fat Burger','What else you need to say?','https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',[])

  ];

  constructor() { }

getRecipe(){
    return this.recipes;
}

}

export const RECIPE_SERVICE: Array<any> = [
  { provide:RecipeService, useClass: RecipeService}
];
