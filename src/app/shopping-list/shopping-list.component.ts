import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("teste", 10),
    new Ingredient("teste", 10),
    new Ingredient("teste", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addElement(i : Ingredient){
    this.ingredients.push(i);
  }

}
