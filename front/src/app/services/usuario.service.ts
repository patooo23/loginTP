import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IniciarSesionInterface,
  RegistrarseInterface,
} from '../interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  http = inject(HttpClient);

  apiBaseUrl = 'http://localhost:3000';

  crearUsuario(usuario: RegistrarseInterface) {
    return this.http.post<any>(`${this.apiBaseUrl}/usuarios`, usuario);
  }

  IniciarSesion(usuario: IniciarSesionInterface) {
    return this.http.post<any>(
      `${this.apiBaseUrl}/usuarios/iniciar-sesion`,
      usuario
    );
  }
}
