import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Para trabajar con el two ways data binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComDirectivas } from './HouseComponent/house.component';
import { listaModelo } from './listamodelocomponent/listamodelo.component';

import { httpRequest } from './serviciohttpcomponent/serviciohttp.component';

@NgModule({
  // Aqui se definen las clases de componentes
  declarations: [
    AppComponent,
    ComDirectivas,
    listaModelo,
    httpRequest
  ],
  imports: [
    // En imports se llama la clase del componente forms que hace cambios reactivos sobre la aplicacion
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
