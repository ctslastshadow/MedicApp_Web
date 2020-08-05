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

    public correo: String;
    public contrasenia: String;
    
    headers = new HttpHeaders({
        'Content-Type':'application/json'
      });
      options = { headers: this.headers };

    constructor(private http: HttpClient, server: ConfiguracionesUrl, private hpptclient: HttpClient) {
        this.urlservicio = server.url1;
        this.urlcentralizada = server.url2; //cada url de configuraciones debe estar apuntado
        this.urlconsumojson = server.url3;
    }

    //Servicio web listar todos los medicamentos
ServicioWebMedicamento(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.urlconsumojson + 'medicamentos',this.options);     
}
ServicioWebLogin(correo,contrasenia){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.urlconsumojson + 'login',this.options);  

}
}