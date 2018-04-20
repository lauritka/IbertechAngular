import { Pipe, PipeTransform} from '@angular/core';
import { TipoIMC } from './imc.model';

@Pipe({
		name:'imcpipe'
})

export class ImcPipe implements PipeTransform {
	transform(value: TipoIMC) {
		let valor_alfanumerico : string;
	//TODO ahgo el cuerpo
			valor_alfanumerico = TipoIMC[value];
		return valor_alfanumerico;
	}
}