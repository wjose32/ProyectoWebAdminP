import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl="http://edvfelipe.pythonanywhere.com/api";
  httpHeaders= new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getTODOSLOSDATOS(): Observable<any> {
    return this.http.get(this.baseurl+'/eventos/',{headers: this.httpHeaders});
  }

  getDepartamentos(): Observable<any> {
    return this.http.get(this.baseurl+'/departamentos/',{headers: this.httpHeaders});
  }

  Agregar(datos): Observable<any> {
    const evento={titulo:datos.titulo,descripcion:datos.descripcion,direccion:datos.direccion,fecha:datos.fecha,hora:datos.hora,disponible:datos.disponible,rutaLugar:datos.rutaLugar,idDepartamento:datos.idDepartamento};
    console.log(evento);
    return this.http.post(this.baseurl+'/eventos/', evento,{headers: this.httpHeaders});
  }
  
}
