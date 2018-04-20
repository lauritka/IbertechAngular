export class Persona {
	nombre : string;
	altura : number;
	peso : number;

	// Los parámetros que se RECIBEN de entrada no tienen por qué llamarse igual que los atributos de la clase
	constructor (nombre:string, altura:number, peso:number) {
		/* this.nombre es el atributo nombre de Persona 
		que se iguala a el parámetro de entrada que se recibe 
		(que en este caso también se llama "nombre")*/
		this.nombre = nombre;
		this.altura = altura;
		this.peso = peso;
	}
}