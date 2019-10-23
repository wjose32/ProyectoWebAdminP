import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { environment } from '../environments/environment';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';
import { LocalidadComponent } from './components/localidad/localidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearEventoComponent,
    LocalidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
