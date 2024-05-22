import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entity/usuarios.entity';
import { Repository } from 'typeorm';
import {
  CrearUsuarioInterface,
  IniciarSesionInterface,
} from './entity/usuarios.interface';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async crear_usuario(usuario: CrearUsuarioInterface) {
    const nombreUrepetido = await this.usuarioRepository.findOne({
      where: { nombreU: usuario.nombreU },
    });

    const correorepetido = await this.usuarioRepository.findOne({
      where: { correo: usuario.correo },
    });

    if (nombreUrepetido) {
      return new HttpException(
        'el nombre de usuario ya existe',
        HttpStatus.CONFLICT,
      );
    } else if (correorepetido) {
      return new HttpException(
        'el correo electronico ya existe',
        HttpStatus.CONFLICT,
      );
    } else {
      const nuevoUsuario = this.usuarioRepository.create(usuario);
      return this.usuarioRepository.save(nuevoUsuario);
    }
  }

  async obtenerUsuarios() {
    return this.usuarioRepository.find();
  }

  async iniciar_sesion(usuario: IniciarSesionInterface) {
    const usuario_encontrado = await this.usuarioRepository.findOne({
      where: { correo: usuario.correo },
    });
    if (!usuario_encontrado) {
      return new HttpException(
        'el correo electronico no está registrado',
        HttpStatus.BAD_REQUEST,
      );
    } else if (usuario.contrasenia == usuario_encontrado.contrasenia) {
      return usuario_encontrado;
    } else {
      return new HttpException('contraseña incorrecta', HttpStatus.CONFLICT);
    }
  }
}
