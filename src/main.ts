import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // importa la función platformBrowserDynamic del módulo @angular/platform-browser-dynamic 

import { AppModule } from './app/app.module'; // importa la clase del modulo raiz de la aplicacion Angular AppModule del archivo ./app/app.module


platformBrowserDynamic().bootstrapModule(AppModule) // Iniciando la aplicacion Angular y haciendola funcionar en el navegador
  .catch(err => console.error(err)); // Captando algun error durante la inicializacion y registra en la consola usando el metodo console.error()
