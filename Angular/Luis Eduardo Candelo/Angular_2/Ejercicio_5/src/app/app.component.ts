import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListStyleSelectComponent } from './list-style-select/list-style-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListStyleSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_5';
}
