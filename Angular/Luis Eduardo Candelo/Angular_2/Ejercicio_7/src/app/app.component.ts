import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeBgColorThemeComponent } from './change-bg-color-theme/change-bg-color-theme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeBgColorThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_7';
}
