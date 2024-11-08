import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ItemsListComponent } from './app/items-list/items-list.component';
import { AddItemComponent } from './app/add-item/add-item.component';
import { EditItemComponent } from './app/edit-item/edit-item.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: ItemsListComponent },        // Ruta para listar ítems
  { path: 'add', component: AddItemComponent },       // Ruta para agregar un ítem
  { path: 'edit/:id', component: EditItemComponent }, // Ruta para editar un ítem específico
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),  // Importamos FormsModule
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
