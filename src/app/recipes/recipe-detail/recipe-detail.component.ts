import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../shared/recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailProp: Recipe;

  clicked = false;

  onClickToggle() {
    this.clicked = !this.clicked;
  }

  ngOnInit(): void {
  }

}
