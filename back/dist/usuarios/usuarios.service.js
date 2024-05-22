"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("./entity/usuarios.entity");
const typeorm_2 = require("typeorm");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async crear_usuario(usuario) {
        const nombreUrepetido = await this.usuarioRepository.findOne({
            where: { nombreU: usuario.nombreU },
        });
        const correorepetido = await this.usuarioRepository.findOne({
            where: { correo: usuario.correo },
        });
        if (nombreUrepetido) {
            return new common_1.HttpException('el nombre de usuario ya existe', common_1.HttpStatus.CONFLICT);
        }
        else if (correorepetido) {
            return new common_1.HttpException('el correo electronico ya existe', common_1.HttpStatus.CONFLICT);
        }
        else {
            const nuevoUsuario = this.usuarioRepository.create(usuario);
            return this.usuarioRepository.save(nuevoUsuario);
        }
    }
    async obtenerUsuarios() {
        return this.usuarioRepository.find();
    }
    async iniciar_sesion(usuario) {
        const usuario_encontrado = await this.usuarioRepository.findOne({
            where: { correo: usuario.correo },
        });
        if (!usuario_encontrado) {
            return new common_1.HttpException('el correo electronico no está registrado', common_1.HttpStatus.BAD_REQUEST);
        }
        else if (usuario.contrasenia == usuario_encontrado.contrasenia) {
            return usuario_encontrado;
        }
        else {
            return new common_1.HttpException('contraseña incorrecta', common_1.HttpStatus.CONFLICT);
        }
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map