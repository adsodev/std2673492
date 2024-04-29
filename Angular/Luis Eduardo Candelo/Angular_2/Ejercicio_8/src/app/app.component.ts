import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnThemeColorComponent } from './btn-theme-color/btn-theme-color.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnThemeColorComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
