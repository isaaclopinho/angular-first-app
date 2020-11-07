import { Component, OnInit } from '@angular/core';
import Recipe from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe : Recipe;

  constructor() { 
  }

  ngOnInit(): void {
  }

  setRecipe(r : Recipe){
    this.recipe = r;
  }
}
