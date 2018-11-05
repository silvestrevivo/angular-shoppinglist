import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test of name",
      "test description",
      "https://images.media-allrecipes.com/images/56589.png"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
