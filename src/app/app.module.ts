import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { AboutComponent } from './pages/about/about.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { PaqueteturisticoComponent } from './pages/paqueteturistico/paqueteturistico.component';
import { PagoenlineaComponent } from './pages/pagoenlinea/pagoenlinea.component';
import { GestionreservaComponent } from './pages/gestionreserva/gestionreserva.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViajeComponent,
    AboutComponent,
    AlojamientoComponent,
    PaqueteturisticoComponent,
    PagoenlineaComponent,
    GestionreservaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
