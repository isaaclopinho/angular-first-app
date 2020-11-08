import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>(); 

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
          this.ingredientsChanged.next(this.getIngredients());
      }

      addIngredients2(ing : Ingredient[]){
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.getIngredients());
    }
}