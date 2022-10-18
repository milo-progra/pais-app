import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  //agrego el decorador Output() defino que la varible onEnter sera evento de emicion para otro componente
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino:string = ''

  constructor() { }

  buscar(){
    // al activar la funcion buscar se emitira el valor que esta dentro de la variable termino
    this.onEnter.emit(this.termino)
    
  }

}
