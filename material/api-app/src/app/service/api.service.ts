import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getMethod(): Observable<IDatos[]> {
    return this.http.get<IDatos[]>(`${this.urlAPI}`);
  }

  public getDato(id: number): Observable<IDatos> {
    return this.http.get<IDatos>(`${this.urlAPI}/${id}`);
  }

  public postMethod(dato: IDatos): Observable<any> {
    return this.http.post(`${this.urlAPI}`, dato);
  }

  public putMethod(id: number, dato: IDatos): Observable<any> {
    return this.http.put(`${this.urlAPI}/${id}`, dato);
  }

  public patchMethod(id: number, dato: {}): Observable<any> {
    return this.http.patch(`${this.urlAPI}/${id}`, dato);
  }

  public deleteMethod(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/${id}`);
  }
}