import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  datos = [{titulo: 'test',direccion:'test',descripcion:'test',disponible:true,idDepartamento:2}];
  datos1 ={titulo:'test',direccion:'test',descripcion:'test',disponible:true};
  seleccionarEvento;
  seleccionarDepartamento;
  dertamentos=[{id:0,nombre:''}];
  selectedFile: File=null;
  public respuestaImagenEnviada;
  public resultadoCarga;
 
  
  constructor(private api: ApiService){
    this.getDatos();
    this.getDepartamentos();
    this.datosclicked(this.datos);
    this.seleccionarEvento = {codgigo:"PVMKS5YE34VPHY19THWF1GPMSV6JVV",titulo: '',descripcion:'',direccion:'',fecha:'',hora:'',disponible:true,rutaLugar:'',calificacionP:0,idDepartamento:1};
    this.seleccionarDepartamento={id:-1,nombre:''}
  }


  getDatos=()=>{
    this.api.getTODOSLOSDATOS().subscribe(
      data =>{
          this.datos=data;

      },
      error =>{
        console.log(error);
      }
    );
  }


  getDepartamentos=()=>{
    this.api.getDEPARTAMAENTOS().subscribe(
      data =>{
         this.dertamentos=data;

      },
      error =>{
        console.log(error);
          });
      }


  Agregar=()=>{
    this.api.Agregar(this.datos1).subscribe(
      data => {
        this.datos.push(data);
      },
      error =>{
        console.log(error);
      }
    );
  }


  datosclicked=(datosM)=>{
this.api.getUnDato(datosM.codigo).subscribe(
  data => {
    this.seleccionarEvento=data;
  },
  error =>{
    console.log(error);
  }
);

  }
  datosclicked2=(datosD)=>{
    this.api.getUnDato(datosD.codigo).subscribe(
      data => {
        this.seleccionarEvento=data;
      },
      error =>{
        console.log(error);
      }
    );
    
      }
  datosclickeddep=(dertamentosD)=>{
    this.api.getUnDatodep(dertamentosD.codigo).subscribe(
      data => {
        this.seleccionarDepartamento=data;
      },
      error =>{
        console.log(error);
      }
    );
      }
  borrarEvento=()=>{
    this.api.borrar(this.datos1).subscribe(
      data => {
        this.datos.push(data);
      },
      error =>{
        console.log(error);
      }
    );
  }
  actualizarEvento=()=>{
    this.api.actualizarEventoService(this.seleccionarEvento).subscribe(
      data => {
        this.seleccionarEvento=data;
      },
      error =>{
        console.log(error);
      }
    );
  }
  
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }




  cargandoImagen=(files: FileList)=>{
      this.api.postFileImagen(files[0],"WRO1EVAR92UIYYIRA0PM9H1GAE0AXH").subscribe(
        data => {
          console.log(this.seleccionarEvento.codgigo);
        },
        error =>{
          console.log(error);
        }
  
      );//FIN DE METODO SUBSCRIBE
  
	}

}
