import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RECIPE_SERVICE } from "../../services/recipe.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RECIPE_SERVICE
  ],
  declarations: []
})
export class RecipeModule { }
