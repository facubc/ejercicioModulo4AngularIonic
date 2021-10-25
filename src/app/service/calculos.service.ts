import { Injectable } from '@angular/core';
import { ModeloOperacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  calcular(datos:ModeloOperacion){
    let tipo=datos.operacion;
    let num1:number = datos.numeroUno;
    let num2:number = datos.numeroDos;
    let suma:number = num1 + num2;
    switch (tipo) {
      case 1:
        return suma;
        break;
    
      case 2:
        return num1 - num2;
        break;
    
      case 3:
        return num1 * num2;
        break;
    
      case 4:
        return num1 / num2;
        break;
    
      default:
        return null;
        break;
    }
  }

}
