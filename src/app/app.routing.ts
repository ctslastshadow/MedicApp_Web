
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';

// Import Containers
import { PlantillaIntegradaComponent } from './Plantilla/plantilla-integrada/plantilla-integrada.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { InicioComponent  } from './inicio/inicio.component'
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
const appRoutes: Routes = [
    
{
    path: 'MedicApp',
    component: InicioComponent,    
},
{
    path: 'Main',
    component: MainAppComponent,
},
{
    path: 'AcercaDeNosotros',
    component: AcercaMedicAppComponent
},
{
    path: 'Cardiologia',
    component: CardiologiaComponent
},
{
    path: 'Ginecologia',
    component: GinecologiaComponent
},
{
    path: 'Pediatria',
    component: PediatriaComponent
},
{
    path: 'Cirugia',
    component: CirugiaComponent
},
{
    path: 'FarmaciaInfo',
    component: FarmaciaInfoComponent
},
{
    path: 'LaboratoriosInfo',
    component: LaboratorioInfoComponent
},
{
    path: 'ConsultasInfo',
    component: ConsultasInfoComponent
},
{
    path: 'MedicAppInfo',
    component: MedicAppInfoComponent
},
{
    path: 'Contacto',
    component: ContactoComponent
},
{
    path: 'Login',
    component: LoginComponent
},
{
    path: 'NuevoUsuario',
    component: NuevoComponent
},
        {
        path: 'template',
        component: PlantillaIntegradaComponent,
        children: [
            {
                path: 'cita',
                component: Pagina1Component
            },
            {
                path: 'historial',
                component: Pagina2Component
            },
            {
                path: 'reportes',
                component: Pagina3Component
            },
            {
                path: 'ajustes',
                component: MainAppComponent,
            },
        ]
    }

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

