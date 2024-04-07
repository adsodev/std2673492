import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent { 
}
