import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ConfiguracionesUrl } from '../ServiciosWeb/configuracionesUrl.service';
import { map } from "rxjs/operators";
import { Observable, Subject, throwError } from 'rxjs';
@Injectable()

export class ServiciosWebConsumo {
    private urlservicio: String;
    private urlcentralizada: String;
    private urlconsumojson: string;

    constructor(private http: Http, server: ConfiguracionesUrl, private hpptclient: HttpClient) {
        this.urlservicio = server.url1;
        this.urlcentralizada = server.url2; //cada url de configuraciones debe estar apuntado
        this.urlconsumojson = server.url3;
    }

    //Servicio web listar todos los medicamentos
ServicioWebMedicamento(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.urlconsumojson + 'medicamentos/')
        .pipe(map(res => res.json()))
}



    //Servicio Web Prueba 
    ServicioWebPrueba(strEstablecimiento) {
        let headers = new Headers();
        var parametros = strEstablecimiento;
        headers.append('Content-Type', 'application/json'); //aqui se hace la petición de nuestro servicio restfull
        return this.http.get(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/ListadoEstablecimiento/' + parametros)
            .pipe(map(res => res.json()))
    }
    
    //Servicios Web Prueba 2
    ServicioWebPrueba2(Parametro1, Parametro2, Parametro3) {
        let headers = new Headers();
        var content = JSON.stringify({
            parametro1: Parametro1,
            parametro2: Parametro2,
            parametro3: Parametro3
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/AnulacionFactura', content, { headers: headers })
            .pipe(map(res => res.json()))
    }
    //Servicio Web Prueba 
    CentralizadaComnsumo(parametro1) {
        let headers = new Headers();
        var parametros = parametro1;
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlcentralizada + 'ServicioWebComprobantes/ServiciosComprobantes/ObtenerCebtralizadaCedula/' + parametros)
            .pipe(map(res => res.json()))
    }

    //Servicio Web consumo json
    ConsumoJsonListado(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlconsumojson + '/users/')
            .pipe(map(res => res.json()))
    }
}