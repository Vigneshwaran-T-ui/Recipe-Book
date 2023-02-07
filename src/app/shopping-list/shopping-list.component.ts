import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient ('Tomatos', 4),
    new Ingredient ('Onion', 2),
    new Ingredient ('chilli', 2)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }
}
