import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  
  constructor( private router:Router) { }
  ngOnInit() {
  }

  gotoLogin(){
    this.router.navigate(['Login']);
    } 
  
    gotoMedicApp(){
      this.router.navigate(['MedicApp']);
      } 
  
      gotoMain(){
        this.router.navigate(['Main']);
        } 
  
        gotoAcercaDeNosotros(){
          this.router.navigate(['AcercaDeNosotros']);
          } 
  
          gotoCardiologia(){
            this.router.navigate(['Cardiologia']);
            } 
  
            gotoGinecologia(){
              this.router.navigate(['Ginecologia']);
              } 
  
            gotoPediatria(){
              this.router.navigate(['Pediatria']);
              }   
  
              gotoCirugia(){
                this.router.navigate(['Cirugia']);
                }   
                gotoFarmaciaInfo(){
                  this.router.navigate(['FarmaciaInfo']);
                  }   
                  gotoLaboratoriosInfo(){
                    this.router.navigate(['LaboratoriosInfo']);
                    }   
                    gotoConsultasInfo(){
                      this.router.navigate(['ConsultasInfo']);
                      }   
  
                      gotoMedicAppInfo(){
                        this.router.navigate(['MedicAppInfo']);
                        }   
  
                        gotoContacto(){
                          this.router.navigate(['Contacto']);
                          }   
                          
  
                          gotoNuevoUsuario(){
                            this.router.navigate(['NuevoUsuario']);
                            }   
  
}
