import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public url_servidor = "http://edvfelipe.pythonanywhere.com/api/imagenes/?codigo=";
  baseurl="http://edvfelipe.pythonanywhere.com/api";
  httpHeaders= new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getTODOSLOSDATOS(): Observable<any> {
    return this.http.get(this.baseurl+'/eventos/',{headers: this.httpHeaders});
  }

  Agregar(datos): Observable<any> {
    const evento={titulo:datos.titulo,descripcion:datos.descripcion,direccion:datos.direccion,fecha:datos.fecha,hora:datos.hora,disponible:datos.disponible,rutaLugar:datos.rutaLugar,idDepartamento:datos.idDepartamento};
    console.log(evento);
    return this.http.post(this.baseurl+'/eventos/', evento,{headers: this.httpHeaders});
  }
  getDEPARTAMAENTOS(): Observable<any> {
    return this.http.get(this.baseurl+'/departamentos/',{headers: this.httpHeaders});
  }
  getUnDato(codigo): Observable<any> {
    return this.http.get(this.baseurl+'/eventos/'+'?codigo='+codigo,{headers: this.httpHeaders});
  }
  getUnDatodep(codigo): Observable<any> {
    return this.http.get(this.baseurl+'/departamentos/'+'?codigo='+codigo,{headers: this.httpHeaders});
  }
  borrar(codigo): Observable<any> {
    return this.http.delete(this.baseurl+'/eventos/'+ codigo,{headers: this.httpHeaders});
  }
  actualizarEventoService(datosM): Observable<any> {
    const body ={titulo: datosM.titulo,descripcion:datosM.descripcion,direccion:datosM.direccion,fecha:datosM.fecha,hora:datosM.hora,disponible:datosM.disponible,rutaLugar:datosM.rutaLugar,calificacionP:datosM.calificacionP,idDepartamento:datosM.idDepartamento}
    return this.http.put(this.baseurl+'/eventos/?codigo='+datosM.codigo,body,{headers: this.httpHeaders});
  }

  public postFileImagen(imagenParaSubir:File,codigo){
    codigo="WRO1EVAR92UIYYIRA0PM9H1GAE0AXH";
		const formData = new FormData(); 
    formData.append('imagen', imagenParaSubir, imagenParaSubir.name); 
    formData.append("codigoEvento", codigo);
		return this.http.post(this.url_servidor+codigo, formData);

	}
  
  
}