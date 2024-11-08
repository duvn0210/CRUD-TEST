import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../app/services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  item = { name: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  addItem(): void {
    this.apiService.addItem(this.item).subscribe(() => {
      this.router.navigate(['/']); // Volver a la lista después de agregar
    });
  }
}
