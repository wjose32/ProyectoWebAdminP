import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { LocalidadComponent } from './components/localidad/localidad.component';

const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'crear-evento', component: CrearEventoComponent},
  { path: 'localidad', component: LocalidadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
