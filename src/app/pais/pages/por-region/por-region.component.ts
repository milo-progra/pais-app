import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  //Creo un arreglo con regiones
  regiones:string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU'];
  hayError: boolean = false;
  paises: Country[] = []



  // creo una variable vacia  para guardar la region seleccionada
  regionActiva: string = '';

  constructor(private paisService:PaisService) { }

//Cambiar al clase 
//Si parametro de la funcion(region) es igual a la region seleccionada en los botones entonces cambia la clase a 'btn btn-primary'
// si no son iguales entonces cambiala a 'btn btn-outline-primary'
getClasesCSS(region:string){
  return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
}

activarRegion(region:string){
  // si vuelvo a seleccionar la misma region no vualvas a consumir el servicio
   if(region === this.regionActiva){return}
    //Esta funcion guarda en regionesActiva la region seleccionada
    this.regionActiva = region;
    console.log(this.regionActiva);
  //llamo el servicio para iniciar busqueda por region y le entrego como parametro la region seleccionada
    this.paisService.buscarPorRegion(region)
    //La respuesta de esta consulta al servicio(.subscribe) se la entrego al parametro llamado (paises)
    .subscribe(param_paises =>{

      console.log(param_paises);
      // guardamos la informacion de param_paises en paises
      this.paises = param_paises
      
    }, (err)=>{
      console.log("Error");
      console.info(err);
      this.hayError = false;
      this.paises = []
    })
    
  }
  
}
