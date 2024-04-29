import { Component } from '@angular/core';

@Component({
  selector: 'app-show-verify-value',
  standalone: true,
  imports: [],
  templateUrl: './show-verify-value.component.html',
  styleUrl: './show-verify-value.component.css'
})
export class ShowVerifyValueComponent {
  
  validateMaxLeghtcharters: boolean = false;
  onInputChange(event: Event) {
    
    const inputValue = (event.target as HTMLInputElement).value;
    
    if (inputValue.length >= 10) {

      this.validateMaxLeghtcharters = true;

    }

    else {
      this.validateMaxLeghtcharters = false
    }
    
  }
  

}
