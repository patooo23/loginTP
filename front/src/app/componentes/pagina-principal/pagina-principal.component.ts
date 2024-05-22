import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent {
  appComponent = inject(AppComponent);
}
