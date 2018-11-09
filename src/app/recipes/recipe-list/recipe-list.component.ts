import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test of name 1",
      "test description",
      "https://images.media-allrecipes.com/images/56589.png"
    ),
    new Recipe(
      "A test of name 2",
      "test description",
      "https://images.media-allrecipes.com/images/56589.png"
    ),
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
