import { Component } from '@angular/core';

@Component({
  selector: 'app-texts-change',
  standalone: true,
  imports: [],
  templateUrl: './texts-change.component.html',
  styleUrl: './texts-change.component.css'
})
export class TextsChangeComponent {
  


  varValue: boolean = false;
  
  changeTextStyle() {
    this.varValue = !this.varValue;

  }
}
