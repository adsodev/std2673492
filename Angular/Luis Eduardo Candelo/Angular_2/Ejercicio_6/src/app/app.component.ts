import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxStyeleComponent } from './box-styele/box-styele.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxStyeleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_6';
}
