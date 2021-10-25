import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresoDataComponent } from './ingreso-data/ingreso-data.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CaluladoraComponent } from './caluladora/caluladora.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoDataComponent,
    OperacionesComponent,
    CaluladoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
