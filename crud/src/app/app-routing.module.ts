import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';

const routes: Routes = [
  { path: 'crear-evento', component: CrearEventoComponent},
  { path: 'user/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
