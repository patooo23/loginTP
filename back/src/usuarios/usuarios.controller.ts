import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import {
  CrearUsuarioInterface,
  IniciarSesionInterface,
} from './entity/usuarios.interface';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}

  @Post()
  crear_usuario(@Body() usuario: CrearUsuarioInterface) {
    return this.usuarioService.crear_usuario(usuario);
  }

  @Post('iniciar-sesion')
  iniciar_sesion(@Body() usuario: IniciarSesionInterface) {
    return this.usuarioService.iniciar_sesion(usuario);
  }
}
