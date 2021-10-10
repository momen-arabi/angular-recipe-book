import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../shared/recipes.model';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() visProp: string;

  recipeItemDetails: Recipe;

  constructor(private recipesService: RecipesService) {
    this.recipesService.recipeViewed.subscribe((recipe: Recipe) => {
      console.log("Cliked Recipe is" + recipe)
      this.recipeItemDetails = recipe;
    })
  }

  // old function for property binding recipe component -> recipe details component
  /*onRecipeShown(details: Recipe) {
    this.recipeItemDetails = details;
    console.log(this.recipeItemDetails);
    console.log("Recipe Clicked");
  }*/


  ngOnInit(): void {
  }

}
