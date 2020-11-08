import { Component, Input, OnInit } from '@angular/core';
import Recipe from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

@Input() recipe : Recipe;

  constructor(private recipesService : RecipeService) { }

  ngOnInit(): void {
  }

  addIngredients(){
  this.recipesService.addIngredientsToShopping(this.recipe.ingredients);
  }
}
