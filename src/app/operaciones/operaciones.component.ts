import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  @Output() tipoOperacion = new EventEmitter<number>();

  ope:number=0;
  constructor() { }

  ngOnInit(): void {
  } 

  operacion(num:number){
    // console.log(num);
    switch (num) {
      case 1:
        this.ope=1;
        break;
      case 2:
        this.ope=2;
        break;
      case 3:
        this.ope=3;
        break;
      case 4:
        this.ope=4;
        break;
    
      default:
        break;
    }
    this.tipoOperacion.emit(this.ope);
  }

}
