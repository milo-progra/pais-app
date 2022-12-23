import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private httpp:HttpClient) { }
  

  private apiUrl: String = "https://restcountries.com/v3.1/";
  //por actualizacion en la API, la ruta para realizar consultar por region cambio  
  private apiUrlGetRegion: String = "https://restcountries.com/v2/";  

  // funcion donde especifico los parametros que deseo traer de la API
  get httpParams(){
    return new HttpParams().set('fields', 'altSpellings,population,flags,name')
  }

  buscarPais(termino:string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`
    return this.httpp.get<Country[]>( url);
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url  = `${this.apiUrl}/capital/${termino}`

    return this.httpp.get<Country[]> (url,{params: this.httpParams});
  }

  getPais(id:string): Observable<Country>{
    const url  = `${this.apiUrl}/alpha/${id}`

    return this.httpp.get<Country> (url);
  }

  //Servicio para buscar paises por region
  buscarPorRegion(region:string){
  
    const url  = `${this.apiUrlGetRegion}/regionalbloc/${region}`
    //retorno la url entregandole los parametros
    return this.httpp.get<Country[]>(url,{params: this.httpParams})
      .pipe(
        tap(console.log)
      )

  }


}
