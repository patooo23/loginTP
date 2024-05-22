import { UsuariosService } from './usuarios.service';
import { CrearUsuarioInterface, IniciarSesionInterface } from './entity/usuarios.interface';
export declare class UsuariosController {
    private usuarioService;
    constructor(usuarioService: UsuariosService);
    crear_usuario(usuario: CrearUsuarioInterface): Promise<import("./entity/usuarios.entity").Usuario | import("@nestjs/common").HttpException>;
    iniciar_sesion(usuario: IniciarSesionInterface): Promise<import("./entity/usuarios.entity").Usuario | import("@nestjs/common").HttpException>;
}
