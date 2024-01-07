import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Para usar Two-way binding
    AppRoutingModule
  ],
  providers: [
    LoggingService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
