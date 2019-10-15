import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearEventoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
