import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeShown = new EventEmitter<string>();
  @Output() shoppingShown = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeComponentShow() {
    this.recipeShown.emit("recipe");
  }

  shoppingComponentShow() {
    this.shoppingShown.emit("shopping");
  }
}
