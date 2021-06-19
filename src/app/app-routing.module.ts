import { NgModule } from "@angular/core";

import{ Routes, RouterModule} from '@angular/router';
import { ViajeComponent } from "./pages/viaje/viaje.component";
import { AboutComponent } from "./pages/about/about.component";
import { PaqueteturisticoComponent } from "./pages/paqueteturistico/paqueteturistico.component";
import { AlojamientoComponent } from "./pages/alojamiento/alojamiento.component";
import { LoginComponent } from "./pages/login/login.component";

const app_routes: Routes=[
  { path: '', component: ViajeComponent},
  {path:'about',component:AboutComponent},
  {path:'alojamiento', component:AlojamientoComponent},
 {path: '**', pathMatch:'full', redirectTo:''}

];

@NgModule({  
   imports:[
     RouterModule.forRoot( app_routes)
  ],
  exports:[
    RouterModule
  ],
  }
)
export class AppRoutingModule{

}