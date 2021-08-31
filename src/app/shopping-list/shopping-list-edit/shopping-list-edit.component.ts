import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingName: string;
  ingAmount: number;

  @Output() ingDetails= new EventEmitter<Ingredient>();

  onIngredientAdd(ing: Ingredient) {
    ing.name = this.ingName;
    console.log(ing.name);
    ing.amount = this.ingAmount;
    console.log(ing.amount);
    this.ingDetails.emit(ing);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
