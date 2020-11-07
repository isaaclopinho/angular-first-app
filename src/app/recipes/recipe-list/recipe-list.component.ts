import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Recipe from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() event = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
    new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
    new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
    new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
    new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(recipe : Recipe){
    this.event.emit(recipe);
  }

}
