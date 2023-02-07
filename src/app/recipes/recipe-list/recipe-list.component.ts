import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  public recipes: any = [
    new Recipe('Chicken Briyani', 'Chicken Briyani Always the BEST.', 'https://www.pngitem.com/pimgs/m/235-2354731_recipes-png-transparent-png.png'),
    new Recipe('Mutton Briyani', 'Mutton Briyani has Unique Fan Base.', 'https://www.pngitem.com/pimgs/m/235-2354731_recipes-png-transparent-png.png'),
    new Recipe('Vegetable Briyani', 'Vegetable Briyani is Some healthy thing.', 'https://www.pngitem.com/pimgs/m/235-2354731_recipes-png-transparent-png.png')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectRecipes(recipe: any){
    this.selectedRecipe.emit(recipe);
  }

}
