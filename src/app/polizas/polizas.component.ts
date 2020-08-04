import { Component, OnInit, NgModule } from '@angular/core';
import { ServiciosWebConsumo } from '../ServiciosWeb/servicioswebconsumo.service'; //traer las direcciones de los servicios
import { Mensajes } from '../Recursos/Mensajes.services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [ 
   ReactiveFormsModule,FormBuilder,FormGroup, Validators,FormControl
  ],
})
@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
  public vecPoliza:Array<any>;
  public idaseguradora: Int32Array;
  public idcobertura: Int32Array;
  public idcontrato: String;
  public numpoliza: String;
  public idestado: Int32Array;
  public finicob: Date;
  public fpagoant: Date;
  public vencini: Date;
  public vencfin: Date;
  public observaciones: String;
  public numrenov: Int32Array;
  public valini: String;
  public valfin: String; 
  public polpdf: File; 
  

  constructor(private servicios: ServiciosWebConsumo, private mensaje: Mensajes, ) { }

  ngOnInit() {
    this.servicios.ServicioWebPruebaED().subscribe(polizas=>
      {this.vecPoliza=polizas;});  
      $(function (){
        $('#dt1').DataTable();
      });
  }
  MensajeError() {
    var  item=alert("No se han recibido datos");
   }

   MensajeCorrecto() {
    var  item=alert("Datos Cargados Correctamente");
   }

  ConsumoPoliza(){    
    try {
      this.servicios.ServicioWebPruebaED().subscribe(polizas=>{
    this.vecPoliza=polizas;          
    })   
      if(this.vecPoliza==null)
          this.MensajeError();
          else
          this.MensajeCorrecto();
    }
    catch(error) {
      this.MensajeError();
      console.error(error);
      
    } 
  }
 
  async ingresarPoliza(idaseguradora,idcobertura,idcontrato,idestado,numpoliza,fpagoant,finicob,vencini,vencfin,observaciones,numrenov,valini,valfin) {  
    if((idaseguradora==undefined)||(idcobertura==undefined)||(idcontrato==undefined)||(idestado==undefined)||(numpoliza==undefined)||(fpagoant==undefined)||(finicob==undefined)||(vencini==undefined)||(vencfin==undefined)||(valini==undefined)||(valfin==undefined))
    window.alert('Error! Campos vacíos');
    else {  
    if ((valini.length>=10)||(valini.length<3)||(valfin.length>=10)||(valfin.length<3))  {
      window.alert('Error! Campos no válidos');
    } else{ 
      const Auditoria = await new Promise<any>(resolve =>
      this.servicios.ServicioWebIngresarPoliza(idaseguradora,idcobertura,idcontrato,idestado,numpoliza,fpagoant,finicob,vencini,vencfin,observaciones,numrenov,valini,valfin)
      .subscribe(translated => {
        resolve(translated)    
      })); 
      this.servicios.ServicioWebPruebaED().subscribe(polizas=>
        {this.vecPoliza=polizas;});  
        $(function (){
          $('#dt1').DataTable();
        });

          window.alert('Estado Ingresado Correctamente la Poliza');         
           window.close();
    }
    }
  }
  
    buscarPoliza() {  
      window.alert('Datos encontrados!!');
      window.close();
    }
  
}
