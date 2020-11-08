import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("input1", {static: false}) name : ElementRef;
  @ViewChild("input2", {static: false}) amount : ElementRef;
  
  constructor(private sl : ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.sl.addIngredients(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
