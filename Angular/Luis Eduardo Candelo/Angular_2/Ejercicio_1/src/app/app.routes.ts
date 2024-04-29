import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TareaComponent } from './components/tarea/tarea.component';

export const routes: Routes = [
    {path: 'taraes',component: TareaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'tareas'}
];
