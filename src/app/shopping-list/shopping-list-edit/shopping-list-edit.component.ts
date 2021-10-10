import { Component, OnInit } from '@angular/core';

// import { Ingredient } from '../../shared/ingredient.model'; (no need to import Ingredient model after using the ShoppingListService)
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingName: string;
  ingAmount: number;

  //@Output() ingDetails= new EventEmitter<Ingredient>(); (old event emmitter to send ingredient details to shopping list component)

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientAdd() {
    this.shoppingListService.addIngredient(this.ingName, this.ingAmount);
    // old click event to send new added ingredient name and amount to shopping list component
      /*ing.name = this.ingName;
      console.log(ing.name);
      ing.amount = this.ingAmount;
      console.log(ing.amount);
      this.ingDetails.emit(ing);*/
  }

  ngOnInit(): void {
  }

}
