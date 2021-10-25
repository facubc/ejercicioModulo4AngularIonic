import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModeloOperacion } from '../model/operacion';

@Component({
  selector: 'app-caluladora',
  templateUrl: './caluladora.component.html',
  styleUrls: ['./caluladora.component.scss']
})
export class CaluladoraComponent implements OnInit {

  etiqueta: string = 'ingrese un n°';
  tipo: string = 'number'

  @Output() calculado = new EventEmitter<ModeloOperacion>();


  valor: number = 0;
  var_1: number = 0;
  var_2: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  // calcular(evento: number) {
  //   this.valor = evento;    
  // }
  valorUno(evento: any) {

    this.var_1=evento;
  }
  valorDos(evento: any) {
    this.var_2=evento;
  }
  creaObjeto(evento: number){
    this.calculado.emit({
      numeroUno:this.var_1,
      numeroDos:this.var_2,
      operacion:evento
    })
  }

}
