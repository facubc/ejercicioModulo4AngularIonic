import { Component } from '@angular/core';
import { ModeloOperacion } from './model/operacion';
import { CalculosService } from './service/calculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modulo4-angular';

  constructor(
    private calculoService: CalculosService,
  ) {

  }

  mostrar(cuenta:ModeloOperacion) {
    let resultado = this.calculoService.calcular(cuenta);
    alert(resultado);
  }
  
}
