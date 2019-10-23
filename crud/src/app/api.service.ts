import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://edvfelipe.pythonanywhere.com/api";
  httpHeaders= new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getTODOSLOSDATOS(): Observable<any> {
    return this.http.get(this.baseurl + '/eventos/', {headers: this.httpHeaders});
  }

  getDepartamentos(): Observable<any> {
    return this.http.get(this.baseurl + '/departamentos/', {headers: this.httpHeaders});
  }

  Agregar(datos): Observable<any> {
    const evento = {
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      direccion: datos.direccion,
      fecha: datos.fecha,
      hora: datos.hora,
      disponible: datos.disponible,
      rutaLugar: datos.rutaLugar,
      idDepartamento: datos.idDepartamento
    };

    console.log(evento);
    return this.http.post(this.baseurl + '/eventos/', evento, {headers: this.httpHeaders});
  }

  //ver los tipos de localidades que existen en la api
  getTipoLocalidad(): Observable<any> {
    return this.http.get(this.baseurl+'/tipolocalidad/',{headers: this.httpHeaders});
  }
  //obtener las localidades de la api
  getLocalidad(): Observable<any> {
    return this.http.get(this.baseurl+'/localidad/',{headers: this.httpHeaders});
  }
  //agregar a la localidad
  AgregarLocalidad(puestos): Observable<any> {
    const local={costo:puestos.costo,cantidadAsientos:puestos.cantidadAsientos,cantidadAsientosDisponible:puestos.cantidadAsientosDisponible,cantidadAsientosOcupados:puestos.cantidadAsientosOcupados,codigoEventos:puestos.codigoEventos,idTipoLocalidad:puestos.idTipoLocalidad};
    return this.http.post(this.baseurl+'/localidad/', local,{headers: this.httpHeaders});
  }
  //agregar asientos a la api
  AgregarAsientos(asiento): Observable<any> {
    const Asientos={numeroAsiento:asiento.numeroAsiento,disponible:asiento.disponible,idLocalidad:asiento.idLocalidad};
    return this.http.post(this.baseurl+'/asientos/', Asientos,{headers: this.httpHeaders});
  }
  //actualizar los tipos de localidad
  actualizarboleto(boletos): Observable<any> {
    const boleto ={tipoLocalidad:boletos.tipoLocalidad}
    return this.http.put(this.baseurl+'/tipolocalidad/?id='+boletos.id,boleto,{headers: this.httpHeaders});
  }

}
