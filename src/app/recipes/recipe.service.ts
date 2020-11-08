import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import Recipe from './Recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe("Era uma vez a Peppa",
         "Um hamburguer delicioso", 
         "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg",
         [new Ingredient("Teste", 1),new Ingredient("Teste2", 2)]),
         new Recipe("Era uma vez a Peppa",
         "Um hamburguer delicioso", 
         "https://roastburger.com.br/wp-content/uploads/2020/04/xburge-t-170x170.jpg",
         [new Ingredient("Teste", 1),new Ingredient("Teste2", 2)])
        ];

      getRecipes(){
          return this.recipes.slice();
      }

      constructor(private shoppingservice : ShoppingListService){

      }

      addIngredientsToShopping(ingredients: Ingredient[]){
            this.shoppingservice.addIngredients2(ingredients);
      }

      
}