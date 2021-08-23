import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  dif = 0;
  motrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) {  }

  buscar(  event: string ){
    
    this.hayError = false;
    this.termino  = event;
    this.motrarSugerencias = false

    this.paisService.buscarPais( this.termino )
    .subscribe ( resp => {
      this.paises = resp;
    
    },( err ) =>{
      this.hayError = true;
      this.paises = [];

    }); 
  }

  sugerencias( event: string) {
    
    this.hayError = false;
    this.termino = event,
    this.motrarSugerencias = true

    this.paisService.buscarPais( event )
    .subscribe(
       paises => this.paisesSugeridos = paises.splice(0,5),
       (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido( termino: string) {

    this.buscar( termino );
    

  }
}
