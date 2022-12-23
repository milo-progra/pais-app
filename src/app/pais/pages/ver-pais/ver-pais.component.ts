import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor(private activatedRouter: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPais(id)),
      tap(console.log)   
    )
    .subscribe(pais => this.pais = pais)
  }

}
