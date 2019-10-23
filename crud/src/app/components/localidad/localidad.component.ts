import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css'],
  providers:[ApiService]
})
export class LocalidadComponent implements OnInit {

  //variables para envirar y guardar informacion
  //Agregar localidad
  localaux=[{costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:1}];
  Local={costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:1};
  //Guarda los tipos de localidad
  tipoasiento=[{id:0,tipoLocalidad:""}];
  //Guarda los eventos
  eventos = [{codigo:'',titulo: '',direccion:'',descripcion:'',disponible:true,calificacionP:1,idDepartamento:1}];
  evento= {codigo:'',titulo: '',direccion:'',descripcion:'',disponible:true,calificacionP:1,idDepartamento:1};
  //Asigna los asientos
  Asientos={numeroAsiento:'',disponible:true,idLocalidad:4};
  Asiento=[{numeroAsiento:'',disponible:true,idLocalidad:0}];
  //Busqueda de la localidad a asignar a los asientos
  localidades=[{id:0, costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:1}];
  localidad={id:0,costo:0,cantidadAsientos:0,cantidadAsientosDisponible:0,cantidadAsientosOcupados:0,codigoEventos:"",idTipoLocalidad:2};
  //contador
  numeros={cont:0};
  //Cambiar el tipo de localidad
  tipocam={id:0,tipoLocalidad:''}

  constructor(private api: ApiService) { 
      this.getTipoLocal();
      this.getEventos();
      this.getLocalidades();
  }
  
  //Metodos de ingreso y lectura
  AgregarLocalidad=()=>{
    //agregar una localidad
    this.api.AgregarLocalidad(this.Local).subscribe(
      data => {
        this.localaux.push(data);
      },
      error =>{
        console.log(error);
      }
    );
    this.AgregarAsientos();
  }
  //agregar los asientos a la nueva localidad
  AgregarAsientos=()=>{
    this.getLocalidades();
    while(this.numeros.cont<this.localidades.length){
        this.localidad=this.localidades[this.numeros.cont];
        this.localidad.id=this.localidad.id+1;
        this.numeros.cont=this.numeros.cont+1;
    }
    this.Asientos.idLocalidad=this.localidad.id;
    while(this.Local.cantidadAsientosDisponible>0){
      if(this.Local.idTipoLocalidad==2){
      this.Asientos.numeroAsiento='B'+this.Local.cantidadAsientosDisponible.toString();
      }
      if(this.Local.idTipoLocalidad==1){
        this.Asientos.numeroAsiento='A'+this.Local.cantidadAsientosDisponible.toString();
      }
      this.api.AgregarAsientos(this.Asientos).subscribe(
        data => {
          this.Asiento.push(data);
        },
        error =>{
          console.log(error);
        });
      this.Local.cantidadAsientosDisponible=this.Local.cantidadAsientosDisponible-1;
    }
  }
  //obtener las localidades que existen en la api
  getLocalidades=()=>{
    this.api.getLocalidad().subscribe(
      data =>{
        this.localidades=data;
      },
     error =>{
       console.log(error);
    });
  }
  //obtener los tipos de localidad de la api
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
  //obtener los eventos del api
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
  //metodo para hacer la actualizacion del nombre de la localidad en la api
  actualizarLocalidad=()=>{
    this.api.actualizarboleto(this.tipocam).subscribe(
      data => {
        this.tipocam=data;
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
