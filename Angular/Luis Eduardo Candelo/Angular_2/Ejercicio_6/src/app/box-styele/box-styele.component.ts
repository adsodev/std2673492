import { Component } from '@angular/core';

@Component({
  selector: 'app-box-styele',
  standalone: true,
  imports: [],
  templateUrl: './box-styele.component.html',
  styleUrl: './box-styele.component.css'
})
export class BoxStyeleComponent {

  ChangeSyle: boolean = false;

  ChangeStyleBtn() {
    this.ChangeSyle = !this.ChangeSyle
  }

}
