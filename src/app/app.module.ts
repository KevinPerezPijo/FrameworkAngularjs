// app.module.ts
// Archivo generado automaticamente

import { NgModule } from '@angular/core'; // Importando el decorador NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importando los servicios para la ejecucion en un navegador web BrowserModule

import { AppRoutingModule } from './app-routing.module'; // Importando las rutas de la aplicacion AppRoutingModule
import { AppComponent } from './app.component'; // Importando el componente raiz de la aplicacion AppComponent

@NgModule({ //Utilizando NgModule para definir el modulo raiz de la aplicacion
  declarations: [
    AppComponent // Definiendo el componente raiz como componente principal de la aplicacion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Clase que puede ser utilizada por otros archivos TypeScript
