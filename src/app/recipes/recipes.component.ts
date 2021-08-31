import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() visProp: string;

  recipeItemDetails: Recipe;


  onRecipeShown(details: Recipe) {
    this.recipeItemDetails = details;
    // console.log(this.recipeItemDetails);
    // console.log("Recipe Clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
