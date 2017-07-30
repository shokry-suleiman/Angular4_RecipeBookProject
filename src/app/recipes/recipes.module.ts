import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {DropdownDirective} from "../directives/dropdown.directive";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class RecipesModule {

}
