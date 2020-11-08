import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Recipe from '../../Recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() r : Recipe;
@Input() index : number;
  ngOnInit(): void {

  }

}
