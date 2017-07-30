import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "./recipe.service";
import {Recipe} from "../recipe";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService,
              private authService: AuthService) {
  }


  storeRecipes() {

    const token  = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-68280.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipe());
  }

  getRecipes() {
    const token  = this.authService.getToken();
    this.http.get('https://ng-recipe-book-68280.firebaseio.com/recipes.json?auth=' + token )
      .map((response: Response)=> {
        const recipes: Recipe[] = response.json();

        for(const recipe of recipes) {
          if(!recipe['ingredients']) {
             recipe['ingredients'] = [];
          }
        }
        return recipes
      }).subscribe((recipes : Recipe[]) => {

        this.recipeService.setRecipes(recipes);
      });

  }

}
export const DataStorage_Service: Array<any> = [
  { provide:DataStorageService, useClass: DataStorageService}
];
