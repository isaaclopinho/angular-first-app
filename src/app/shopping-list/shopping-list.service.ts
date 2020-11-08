import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>(); 

    private ingredients: Ingredient[] = [
        new Ingredient("teste", 10),
        new Ingredient("teste", 10),
        new Ingredient("teste", 10),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ing : Ingredient){
          this.ingredients.push(ing);
          this.ingredientsChanged.emit(this.getIngredients());
      }

      addIngredients2(ing : Ingredient[]){
        this.ingredients.push(...ing);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}