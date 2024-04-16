import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../shared/ui/model/model.component';
import { InicioFormComponent } from '../inicio-form/inicio-form.component';
import { ApiService } from '../../services/api.service';
import { IDatos } from '../shared/models/datos';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ModelComponent, InicioFormComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  isModelOpen = false;

  datos: IDatos[] = [];
  dato!: IDatos;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getMethod();
  }

  getMethod() {
    this.ApiService.getMethod().subscribe({
      next: (response) => {
        this.datos = response;
      },
    });
  }

  deleteMethod(id: number) {
    this.ApiService.deleteMethod(id).subscribe({
      next: (response) => {
        this.getMethod();
      },
    });
  }

  loadDato(dato: IDatos) {
    this.dato = dato;
    this.openModel();
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getMethod();
  }
}