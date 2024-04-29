import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaComponent } from './components/tarea/tarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_1';
}
