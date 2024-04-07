import { Component, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  
  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  toggleMenu() {
    const mainNav = this.elementRef.nativeElement.querySelector('.main-nav');
    const IconBarsMenu = this.elementRef.nativeElement.querySelector('.fa-bars');
    mainNav.classList.toggle('open');
    if (mainNav.classList.contains('open')) {
      IconBarsMenu.classList.add('fa-times'); // Suponiendo que quieras cambiar el icono a una "X"
    } else {
      IconBarsMenu.classList.remove('fa-times');
    }
  }
}