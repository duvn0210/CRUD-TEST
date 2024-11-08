import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
}
