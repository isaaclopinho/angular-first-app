import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: any;
  editMode: any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = +p['id'];
      this.editMode = p['id'] != null;
    })
    console.log(this);
  }

}
