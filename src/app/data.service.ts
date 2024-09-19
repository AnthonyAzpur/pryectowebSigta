import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DataItem {
  dni: string;
  nombre: string;
  area: string;
  host: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://tu-api.com/datos'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  getData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.apiUrl);
  }
}
