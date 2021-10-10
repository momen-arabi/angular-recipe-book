import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Orange',2)
  ]

  addIngredient(ingName: string, ingAmount: number) {
    this.ingredients.push({name: ingName, amount: ingAmount});
  }
}
