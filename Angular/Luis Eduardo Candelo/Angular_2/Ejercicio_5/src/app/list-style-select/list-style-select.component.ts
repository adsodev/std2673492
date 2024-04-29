import { Component } from '@angular/core';

@Component({
  selector: 'app-list-style-select',
  standalone: true,
  imports: [],
  templateUrl: './list-style-select.component.html',
  styleUrl: './list-style-select.component.css'
})
export class ListStyleSelectComponent {

  Lists = [
    {id: 1, valueitem: 'Item 1'},
    {id: 2, valueitem: 'Item 2'},
    {id: 3, valueitem: 'Item 3'},
    {id: 4, valueitem: 'Item 4'},
    {id: 5, valueitem: 'Item 5'},
    {id: 6, valueitem: 'Item 6'},
    {id: 7, valueitem: 'Item 7'},
  ];


  StatusVar: boolean = false;

  toogleTheme() {
    this.StatusVar = !this.StatusVar;
  }

}
