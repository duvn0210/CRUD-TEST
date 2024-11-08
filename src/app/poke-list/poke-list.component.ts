import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-list.component.html',
  providers: [PokeService],
  styleUrls: ['./poke-list.component.css']

})
export class PokeListComponent implements OnInit {
    pokemons: any[] = [];
    filteredPokemons: any[] = []; // Almacenar Pokémon filtrados con ataque > 50
    showFiltered: boolean = false; // Estado para controlar la visualización de los Pokémon filtrados
  
    constructor(private pokeService: PokeService) {}
  
    ngOnInit(): void {
      // Obtener todos los Pokémon
      this.pokeService.getPokemons().subscribe((data) => {
        this.pokemons = data;
      });
    }
  
    // Mostrar Pokémon con ataque mayor a 50
    showPokemonsWithHighAttack() {
      this.showFiltered = true;
      this.pokeService.getPokemonsWithHighAttack().subscribe((data) => {
        this.filteredPokemons = data;
      });
    }
  
    // Mostrar todos los Pokémon de nuevo
    showAllPokemons() {
      this.showFiltered = false;
    }
  }
