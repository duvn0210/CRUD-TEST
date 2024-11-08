import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../app/services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ApiService],
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item = { nombre: '', descripcion: '' };
  itemId!: number;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getItems().subscribe((data) => {
      const foundItem = data.find((i: any) => i.id === this.itemId);
      if (foundItem) {
        this.item = foundItem;
      }
    });
  }

  updateItem(): void {
    this.apiService.updateItem(this.itemId, this.item).subscribe(() => {
      this.router.navigate(['/']); // Volver a la lista después de actualizar
    });
  }
}
