"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = [];
        //recipe:Recipe = new Recipe('men','menStyle','images/shokry.jpg');
        //@Output() recipeSelected: EventEmitter<Recipe>;
        this.recipeSelected = new core_1.EventEmitter();
        // this.recipeSelected = new EventEmitter();
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipe();
    };
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    return RecipeListComponent;
}());
__decorate([
    core_1.Output()
], RecipeListComponent.prototype, "recipeSelected", void 0);
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'app-recipe-list',
        templateUrl: 'recipe-list.component.html'
    })
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
