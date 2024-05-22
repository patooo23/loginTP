export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  nombreU: string;
  correo: string;
  contrasenia: string;
}

export interface RegistrarseInterface {
  nombre: string;
  apellido: string;
  nombreU: string;
  correo: string;
  contrasenia: string;
}

export interface IniciarSesionInterface {
  correo: string;
  contrasenia: string;
}
