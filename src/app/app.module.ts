import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
/****Componente Plantilla */
import { AppHeaderComponent } from './Plantilla/app-header/app-header.component';
import { AppFooterComponent } from './Plantilla/app-footer/app-footer.component';
import { AppContentComponent } from './Plantilla/app-content/app-content.component';
import { AppAsideComponent } from './Plantilla/app-aside/app-aside.component';
import { PlantillaIntegradaComponent } from './Plantilla/plantilla-integrada/plantilla-integrada.component';
//Import Routing
import { routing } from './app.routing';

//Import Paginas
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

//Servicios
import { ConfiguracionesUrl } from './ServiciosWeb/configuracionesUrl.service';
import { ServiciosWebConsumo } from './ServiciosWeb/servicioswebconsumo.service';
import { Mensajes } from './Recursos/Mensajes.services';
import {ToolsService } from './Recursos/Tools.services';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaMedicAppComponent } from './acerca-medic-app/acerca-medic-app.component';
import { CardiologiaComponent } from './cardiologia/cardiologia.component';
import { GinecologiaComponent } from './ginecologia/ginecologia.component';
import { PediatriaComponent } from './pediatria/pediatria.component';
import { CirugiaComponent } from './cirugia/cirugia.component';
import { FarmaciaInfoComponent } from './farmacia-info/farmacia-info.component';
import { LaboratorioInfoComponent } from './laboratorio-info/laboratorio-info.component';
import { ConsultasInfoComponent } from './consultas-info/consultas-info.component';
import { MedicAppInfoComponent } from './medic-app-info/medic-app-info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { MainAppComponent } from './main-app/main-app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    AppAsideComponent,
    PlantillaIntegradaComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    InicioComponent,
    AcercaMedicAppComponent,
    CardiologiaComponent,
    GinecologiaComponent,
    PediatriaComponent,
    CirugiaComponent,
    FarmaciaInfoComponent,
    LaboratorioInfoComponent,
    ConsultasInfoComponent,
    MedicAppInfoComponent,
    ContactoComponent,
    LoginComponent,
    NuevoComponent,
    MainAppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [ConfiguracionesUrl,ServiciosWebConsumo,Mensajes,ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
