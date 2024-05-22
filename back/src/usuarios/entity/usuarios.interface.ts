export interface CrearUsuarioInterface {
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
