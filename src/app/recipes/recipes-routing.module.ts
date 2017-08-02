///<reference path="recipe-edit/recipe-edit.component.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipesComponent} from "./recipes.component";
import {AuthGuardService} from "../auth/auth-guard.service";

const recipesRoutes: Routes = [

  { path: 'recipes', component: RecipesComponent, children: [
    { path:'', component: RecipeStartComponent },
    //come before path: ':id' where Angular determine that is not dynamic
    // path
    { path:'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    { path:':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ] },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RecipesRoutingModule { }
