import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pyEnvironment } from '../../environments/pyEnvironment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  // Usando comillas invertidas (backticks) para interpolar la variable pyEnvironment
  private apiUrl = `${pyEnvironment}/api/pokemons`;  // Aquí se organiza correctamente la URL

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de Pokémon
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obtener Pokémon con ataque mayor a 50
  getPokemonsWithHighAttack(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?filter=highattack`);
  }
}
