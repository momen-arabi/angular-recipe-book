import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';

  sectionID: string = "recipe";


  onRecipeShown(recipeID: string) {
    this.sectionID = recipeID;
  }

  onShoppingShown(shoppingID: string) {
    this.sectionID = shoppingID;
  }

}
