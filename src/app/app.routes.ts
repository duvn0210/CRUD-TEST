import { Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { PokeListComponent } from './poke-list/poke-list.component';

export const routes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'edit/:id', component: EditItemComponent },
  { path: 'pokemons', component: PokeListComponent }
];
