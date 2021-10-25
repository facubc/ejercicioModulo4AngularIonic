import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ingreso-data',
  templateUrl: './ingreso-data.component.html',
  styleUrls: ['./ingreso-data.component.scss']
})
export class IngresoDataComponent implements OnInit {

  @Input() etiqueta:string='aca va dato desde controlador'
  @Input() tipo:string='number'
  @Output() valorIngresado = new EventEmitter<number>();

  valor:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  ingresoValor(evento:any){
    
      this.valor = evento.target.value;
      this.valorIngresado.emit(this.valor);
      // console.log(this.valor);
    
  }

}
