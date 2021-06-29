import { NgModule } from "@angular/core";

import{ Routes, RouterModule} from '@angular/router';

import { ViajeComponent } from "./pages/viaje/viaje.component";
import { AboutComponent } from "./pages/about/about.component";
import { AlojamientoComponent } from "./pages/alojamiento/alojamiento.component";
import { PaqueteturisticoComponent } from "./pages/paqueteturistico/paqueteturistico.component";
import { GestionreservaComponent } from "./pages/gestionreserva/gestionreserva.component";
import { LoginComponent } from "./pages/login/login.component";

const app_routes: Routes=[
  { path: 'viaja', component: ViajeComponent},
  {path:'about',component:AboutComponent},
  {path:'alojamiento', component:AlojamientoComponent},
  {path: 'paqueteturistico',component:PaqueteturisticoComponent},
  {path: 'gestionreserva', component:GestionreservaComponent},
{path:'login', component:LoginComponent},

];

@NgModule({  
   imports:[
     RouterModule.forRoot(app_routes)
  ],
  exports:[
    RouterModule
  ],
  }
)
export class AppRoutingModule{

}