import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  @Output() recipeToList = new EventEmitter<Recipe>();

  onRecipeItemClick() {
    this.recipeToList.emit(this.recipeItem);  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
