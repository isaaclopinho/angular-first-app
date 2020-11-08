import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Recipe from '../../Recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() r : Recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {

  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.r)
  }
}
