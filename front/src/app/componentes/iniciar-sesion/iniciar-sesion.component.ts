import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IniciarSesionInterface } from 'src/app/interfaces/usuario.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent {
  usuarioService = inject(UsuarioService);
  appComponent = inject(AppComponent);
  router = inject(Router);
  usuario = {
    correo: '',
    contrasenia: '',
  };

  iniciarSesion(event: SubmitEvent) {
    event.preventDefault();
    const formulario = event.target as HTMLFormElement;
    const correo = (formulario.elements.namedItem('correo') as HTMLInputElement)
      .value;
    const contrasenia = (
      formulario.elements.namedItem('contrasenia') as HTMLInputElement
    ).value;

    if (formulario.checkValidity()) {
      const credenciales: IniciarSesionInterface = {
        correo,
        contrasenia,
      };
      this.usuarioService.IniciarSesion(credenciales).subscribe({
        next: (data) => {
          if (!data.nombreU) {
            Swal.fire({
              title: 'Error',
              text: data.message,
              icon: 'error',
            });
          } else {
            this.appComponent.estaLogueado.set(true);
            this.appComponent.usuarioLogueado.set(data);
            this.router.navigate(['/pagina-principal']);
          }
        },
      });
    }
  }
}
