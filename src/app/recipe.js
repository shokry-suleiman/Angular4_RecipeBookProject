"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Recipe = (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
