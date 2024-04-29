import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-theme-color',
  standalone: true,
  imports: [],
  templateUrl: './btn-theme-color.component.html',
  styleUrl: './btn-theme-color.component.css'
})
export class BtnThemeColorComponent {

  ToogleTheme() {
    document.body.classList.toggle('dark_mode')
  }

}
