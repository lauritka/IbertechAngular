import { Component, OnInit, OnChanges } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
//   styleUrls: ['./app.component.css']
})
export class PersonaComponent implements OnInit, OnChanges {
  private persona : Persona;

  constructor () { // Permite crear una instancia del objeto. 
    //El constructor debería ser solo para hacer set de los atributos a diferencia de ngOnInit
    console.log("Pasa por inicio Persona");
    this.persona = new Persona ("Laura", 1.62, 52);
  }
  ngOnChanges(){
    console.log("OnChanges invocado"); //Se ejecutaría cuando cambia el atributo
  }
  ngOnInit (){ // Está pensado para hacer llamadas a funciones
    console.log("El elemento ha sido iniciado");
  }
  // public esVisible ():boolean {
  //   return true;
  // } Se puede incluir en [hidden] = "esVisible()"
  public mostrarPersona (persona:Persona) : void {
    console.log("Nombre:",persona.nombre);
    console.log("Altura:",persona.altura);
    console.log("Peso:",persona.peso);
  }
}
