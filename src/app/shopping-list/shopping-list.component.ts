import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() visProp: string;

  ingredients: Ingredient[] = [];

  // old ingredients array
  /*ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Orange',2)
  ]*/

  // old event binding function to show newly added ingredient
  /*onAddedIngredients(inAdd: Ingredient) {
    this.ingredients.push(inAdd);
    console.log(this.ingredients);
  }*/

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

}
