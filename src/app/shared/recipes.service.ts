import {Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';

@Injectable ({providedIn: 'root'})

export class RecipesService {
  recipeViewed = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is the recipe 1 description', 'https://static.onecms.io/wp-content/uploads/sites/44/2021/02/18/veggie-grilled-cheese-tomato-soup.jpg'),
    new Recipe('Recipe 2', 'This is the recipe 2 description', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg')
  ];
  
}
