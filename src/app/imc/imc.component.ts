import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {TipoIMC} from './imc.model';

@Component({
  selector: 'imc-persona', // Define un espacio nuevo. Selector que se utiliza para llamar al componente en el html padre
  templateUrl: './imc.component.html'
  //styleUrls: ['./app.component.css'] Cada componente puede tener un estilo definido específicamente
})
export class ImcComponent implements OnInit, OnChanges {
  // @Input permite crear la comunicación entre componente padre e hijo. El hijo (imc) accede a los atributos del padre
  @Input() peso: number; // Coge el valor de persona.componente.html [peso], que recoge el valor de persona.peso
  // El valor entre [] tiene que ser el mismo del input.
  @Input() altura: number;
  imc : number;
  tipo: TipoIMC;

  informar() : void{
    console.log("Peso:",this.peso);
    console.log("Altura:",this.altura);
  }

  public calculoImc(peso:number, altura:number) {
    this.imc = peso/((altura)*(altura));
  }

  static calcularIMC (imc:number):TipoIMC {
    let valor : TipoIMC;
      if (imc < 16) {
        valor = TipoIMC.desnutrido
      } else if (imc <=18) {
        valor = TipoIMC.delgado
      } else if (imc <=25) {
        valor = TipoIMC.normal
      } else if (imc <=31) {
        valor = TipoIMC.sobrepeso
      } else if (imc >31){
        valor = TipoIMC.obeso
      }
    return valor;
  }

  ngOnInit(){
    console.log("Init de Imc");
    this.informar();
  }
  ngOnChanges(changes:SimpleChanges){    
    if (changes.peso) {
      console.log("Peso Modificado!");
      console.log("Peso Actual",changes.peso.currentValue);
      console.log("Peso Anterior",changes.peso.previousValue);
    }  
    console.log("Changes de Imc");
    this.calculoImc(this.peso , this.altura);
    let imc_n = ImcComponent.calcularIMC(this.imc);
    this.informar();
  }
}