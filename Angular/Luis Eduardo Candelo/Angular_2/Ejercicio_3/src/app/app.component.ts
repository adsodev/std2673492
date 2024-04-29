import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowVerifyValueComponent } from './show-verify-value/show-verify-value.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowVerifyValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_3';
}
