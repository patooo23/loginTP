import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Usuario } from './interfaces/usuario.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front';

  usuarioVacio: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    nombreU: '',
    contrasenia: '',
  };

  usuarioLogueado = signal<Usuario>(this.usuarioVacio);
  estaLogueado = signal<boolean>(false);
}
