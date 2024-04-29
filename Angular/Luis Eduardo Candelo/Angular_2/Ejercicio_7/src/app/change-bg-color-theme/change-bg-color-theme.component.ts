import { Component } from '@angular/core';

@Component({
  selector: 'app-change-bg-color-theme',
  standalone: true,
  imports: [],
  templateUrl: './change-bg-color-theme.component.html',
  styleUrl: './change-bg-color-theme.component.css'
})
export class ChangeBgColorThemeComponent {
  selectedColor: string = '#000000'; // Valor inicial del color

  updateColor(event: any) {
    this.selectedColor = event.target.value; // Actualizar el valor del color seleccionado
  }
}
