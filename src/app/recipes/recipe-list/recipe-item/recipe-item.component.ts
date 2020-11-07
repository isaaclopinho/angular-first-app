import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Recipe from '../../Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() selecionado = new EventEmitter<void>();
  @Input() r : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.selecionado.emit();
  }
}
