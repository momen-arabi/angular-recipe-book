import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() visProp: string;

  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Orange',2)
  ]

  onAddedIngredients(inAdd: Ingredient) {
    this.ingredients.push(inAdd);
    console.log(this.ingredients);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
