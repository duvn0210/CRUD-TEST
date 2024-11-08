import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Método para obtener los items
  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud HTTP', error);
    return throwError(error);
  }

  // Método para agregar un item
  addItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, item);
  }

  // Método para actualizar un item
  updateItem(id: number, item: any): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.put(`${this.apiUrl}/update`, item, { params });
  }

  // Método para eliminar un item
  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/delete`, {
      body: { id: id },
    });
  }
  
}
