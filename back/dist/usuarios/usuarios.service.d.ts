import { HttpException } from '@nestjs/common';
import { Usuario } from './entity/usuarios.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioInterface, IniciarSesionInterface } from './entity/usuarios.interface';
export declare class UsuariosService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    crear_usuario(usuario: CrearUsuarioInterface): Promise<Usuario | HttpException>;
    obtenerUsuarios(): Promise<Usuario[]>;
    iniciar_sesion(usuario: IniciarSesionInterface): Promise<Usuario | HttpException>;
}
