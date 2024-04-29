import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IDatos } from '../models/datos';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  datos: IDatos[] = [];

  dato = {
    title: 'título',
    body: 'Contenido',
  }

  datop = {
    title: 'título',
  }

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getMethod();
    // this.getDato(2);
    // this.postMethod(this.dato);
    // this.putMethod(2, this.dato);
    // this.patchMethod(2, this.datop);
    // this.deleteMethod(2);
  }

  getMethod() {
    this.ApiService.getMethod().subscribe({
      next: (response) => {
        console.log(response);
        this.datos = response;
      },
    });
  }

  getDato(id: number) {
    this.ApiService.getDato(id).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  postMethod(dato: IDatos) {
    this.ApiService.postMethod(dato).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  putMethod(id: number, dato: IDatos) {
    this.ApiService.putMethod(id, dato).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  patchMethod(id: number, dato: {}) {
    this.ApiService.patchMethod(id, dato).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  deleteMethod(id: number) {
    this.ApiService.deleteMethod(id).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}