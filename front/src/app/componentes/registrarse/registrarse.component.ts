import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { RegistrarseInterface } from 'src/app/interfaces/usuario.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent {
  usuarioService = inject(UsuarioService);
  usuario = {
    nombre: '',
    apellido: '',
    nombreU: '',
    correo: '',
    contrasenia: '',
    repetirContrasenia: '',
  };

  crearUsuario(event: SubmitEvent) {
    console.log('algo');

    event.preventDefault();
    const formulario = event.target as HTMLFormElement;

    const nombre = (formulario.elements.namedItem('nombre') as HTMLInputElement)
      .value;

    const apellido = (
      formulario.elements.namedItem('apellido') as HTMLInputElement
    ).value;

    const correo = (formulario.elements.namedItem('correo') as HTMLInputElement)
      .value;

    const nombreU = (
      formulario.elements.namedItem('nombre-u') as HTMLInputElement
    ).value;

    const contrasenia = (
      formulario.elements.namedItem('contrasenia') as HTMLInputElement
    ).value;

    const repetirContrasenia = (
      formulario.elements.namedItem('repetir-contrasenia') as HTMLInputElement
    ).value;

    if (contrasenia != repetirContrasenia) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
      });
    } else if (formulario.checkValidity()) {
      const nuevoUsuario: RegistrarseInterface = {
        nombre,
        apellido,
        correo,
        nombreU,
        contrasenia,
      };
      this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
        next: (data) => {
          if (data.correo) {
            Swal.fire({
              title: 'Éxito',
              text: 'Se ha creado su usuario',
              icon: 'success',
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: data.message,
              icon: 'error',
            });
          }
        },
        error: (err) =>
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error',
          }),
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese los datos faltantes',
        icon: 'error',
      });
    }
  }
}
