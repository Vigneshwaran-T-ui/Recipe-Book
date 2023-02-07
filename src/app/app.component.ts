import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course-Project-Recipe-Book-Shopping-Cart';
  public headerData = 'Recipes';
  public navRecipes = 'active';
  public navShoppingList = ''

  featureList(event: any){
    this.headerData = event
    if (this.headerData === 'Recipes'){
      this.navRecipes = 'active';
      this.navShoppingList = '';
    }
    if (this.headerData === 'shoppingList'){
      this.navRecipes = '';
      this.navShoppingList = 'active';

    }
  }
}
