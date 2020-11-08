import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Recipe from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id: number;

  constructor(private recipesService : RecipeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.recipe = this.recipesService.getRecipesById(this.id);
    })
  }

  addIngredients(){
  this.recipesService.addIngredientsToShopping(this.recipe.ingredients);
  }
}
