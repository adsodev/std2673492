import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent {
    @Input() name: string = '';
    @Input() price: number = 0;
    @Input() description: string = '';   
}
