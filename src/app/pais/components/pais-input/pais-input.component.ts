import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  //agrego el decorador Output() defino que la varible onEnter sera evento de emicion para otro componente
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
 
  debouncer: Subject<string> = new Subject();

  termino:string = '';


  ngOnInit(): void {
    this.debouncer
    .pipe(
      //cuando dejo de escrbir por mas de 300 milecimas de segundo ejecuta el subscribe
      debounceTime(300)
    )
    .subscribe(valor => {
      this.onDebounce.emit( valor );
      
    })
  }

  buscar(){
    // al activar la funcion, se enviara la variabla onEnter al componente que lo necesite
    this.onEnter.emit(this.termino)
    
  }

  teclaPrecionada(event:any){
    this.debouncer.next( this.termino )
    
  }
}
