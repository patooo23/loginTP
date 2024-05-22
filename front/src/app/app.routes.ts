import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./componentes/inicio/inicio.component').then(
        (c) => c.InicioComponent
      ),
  },

  {
    path: 'iniciar-sesion',
    loadComponent: () =>
      import('./componentes/iniciar-sesion/iniciar-sesion.component').then(
        (c) => c.IniciarSesionComponent
      ),
  },

  {
    path: 'registrarse',
    loadComponent: () =>
      import('./componentes/registrarse/registrarse.component').then(
        (c) => c.RegistrarseComponent
      ),
  },

  {
    path: 'pagina-principal',
    loadComponent: () =>
      import('./componentes/pagina-principal/pagina-principal.component').then(
        (c) => c.PaginaPrincipalComponent
      ),
  },
];
