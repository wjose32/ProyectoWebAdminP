import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  datos = [{titulo: 'test',direccion:'test',descripcion:'test',disponible:true,calificacionP:1,idDepartamento:1}];
  datos1 ={titulo:'',direccion:'',descripcion:'',disponible:false,rutaLugar:'',calificacionP:'',idDepartamento:0};
  departamentos=[{id:0,nombre:''}];
  titulo;
  descripcion;
 
  constructor(private api: ApiService){
    this.getDatos();
    this.getDepartamentos();
  }
  getDatos=()=>{
    this.api.getTODOSLOSDATOS().subscribe(
      data =>{
          this.titulo=data.titulo;
  
          this.descripcion=data.descripcion;
      },
      error =>{
        console.log(error);
      }
    );
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

  ngOnInit(){
    this.getDepartamentos();
  }

  getDepartamentos=()=>{
     this.api.getDepartamentos().subscribe(
       data =>{
          this.departamentos=data;

       },
       error =>{
         console.log(error);
           });
       }
}
