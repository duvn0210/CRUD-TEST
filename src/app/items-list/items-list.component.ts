import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  deleteItem(id: number): void {
    this.apiService.deleteItem(id).subscribe(() => {
      this.getItems(); // Actualizar la lista después de eliminar
    });
  }
}
