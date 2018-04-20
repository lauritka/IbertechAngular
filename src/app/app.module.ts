// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ImcComponent } from './imc/imc.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
