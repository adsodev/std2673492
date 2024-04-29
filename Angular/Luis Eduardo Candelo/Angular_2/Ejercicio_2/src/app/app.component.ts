import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos = [
    {id: 1, name: 'Arroz', price: 2, description: 'El Arroz acompaña bien  todos tus platos'},
    {id: 2, name: 'Carne', price: 3, description: 'El Carne acompaña bien  todos tus platos'},
    {id: 3, name: 'Zanahoria', price: 4, description: 'El Zanahoria acompaña bien  todos tus platos'}
  ]
}

