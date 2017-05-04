import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>=[];
  recipe:Recipe = new Recipe('men','menStyle','C:\Users\Shokry Suleiman\Desktop\recipe-book\src\assets\images');
  constructor() { }

  ngOnInit() {
  }

}
