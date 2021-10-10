import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../../shared/recipes.model';
import { RecipesService } from '../../../shared/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  //@Output() recipeToList = new EventEmitter<Recipe>(); (old event emmitter to send the recipe to the recipe list component)

  constructor(private recipesService: RecipesService) {}

  onRecipeItemClick() {
    //this.recipeToList.emit(this.recipeItem); (emitting the recipe item to the recipe list component on recipe item click)
    this.recipesService.recipeViewed.emit(this.recipeItem);
    console.log("Recipe Item is:" + this.recipeItem.name);
  }

  ngOnInit(): void {
  }

}
