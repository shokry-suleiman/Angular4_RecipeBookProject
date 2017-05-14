import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import {Ingredient} from "../classes/ingredient";

@Injectable()

export class RecipeService {

  private  recipes: Array<Recipe> = [
    new Recipe('men','menStyle','images/shokry.jpg',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('summaryStyle','menStyle','images/shokry.jpg',[])

  ];

  constructor() { }

getRecipe(){
    return this.recipes;
}

}

export const RECIPE_SERVICE: Array<any> = [
  { provide:RecipeService, useClass: RecipeService}
];
