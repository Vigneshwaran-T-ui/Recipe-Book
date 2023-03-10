import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('quantityInput') quantityInputRef!: ElementRef;
  @Output() addIngredients = new  EventEmitter<{name: string, quantity: number}>()
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.quantityInputRef.nativeElement.value;
    const newIngredient  = new Ingredient (ingName, ingQuantity);
    this.addIngredients.emit(newIngredient);
  }

}
