import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    // los dos metodos hacen lo mismo pero uno es mas largo que otro

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.paisService.getPaisAlpha ( id ) ),
      tap( console.log)
    ).subscribe( pais => this.pais = pais );

    /*
    this.activatedRoute.params.subscribe( ({ id }) =>{
      console.log( id );

        this.paisService.getPaisAlpha( id ).subscribe( pais => {
          console.log( pais );
        })
    })
    */
  
  }

}
