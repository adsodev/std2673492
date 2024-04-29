import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextsChangeComponent } from './texts-change/texts-change.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextsChangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_4';
}
