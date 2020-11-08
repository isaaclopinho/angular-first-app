import { EventEmitter, Injectable } from '@angular/core';
import Recipe from './Recipe.model';

// @Injectable({
//     providedIn: 'root'
// })
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
        new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
        new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
        new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
        new Recipe("Era uma vez a Peppa", "Um hamburguer delicioso", "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg"),
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      
}