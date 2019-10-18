import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  //variables para envirar y guardar informacion
  localaux=[{costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:1}];
  Local={costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:1};
  tipoasiento=[{id:0,tipoLocalidad:""}];
  eventos = [{codigo:'',titulo: 'test',direccion:'test',descripcion:'test',disponible:true,calificacionP:1,idDepartamento:1}];
  //
  constructor(private api: ApiService) { 
      this.getTipoLocal();
      this.getEventos();
  }
  //Metodos de 
  AgregarLocalidad=()=>{
    this.api.AgregarLocalidad(this.Local).subscribe(
      data => {
        console.log(this.Local);
        this.localaux.push(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

  getTipoLocal=()=>{
    this.api.getTipoLocalidad().subscribe(
      data =>{
        this.tipoasiento=data;
     },
     error =>{
       console.log(error);
         }
    );
  }

  getEventos=()=>{
    this.api.getTODOSLOSDATOS().subscribe(
      data =>{
          this.eventos=data;
      },
      error =>{
        console.log(error);
      }
    );
  }
}
