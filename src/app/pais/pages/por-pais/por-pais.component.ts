import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = []
  paisesSugerencia: Country[] = []
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino
    this.paisService.buscarPais(this.termino)
    
    .subscribe(paises =>{
      console.log(paises);
      this.paises = paises
      
    }, (err) => {
      console.log("Error");
      console.info(err);
      this.hayError = true;
      this.paises = []
      
    })
    
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino
    this.mostrarSugerencias = true;
    //todo: crear sugerencias
    this.paisService.buscarPais(termino)
      //splice(0,3) solo mostrar los primeros 3 resultados
      .subscribe(
        paises => this.paisesSugerencia = paises.splice(0,5),
        (err) => this.paisesSugerencia = [] )
      
      console.log(this.paisesSugerencia);

  }

  buscarSugerido( termino:string){
    this.buscar(termino);
    
  }
 
}
