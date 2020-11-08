import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import Recipe from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[];
  
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }

  newRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }

}
