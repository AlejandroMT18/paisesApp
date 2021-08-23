import { Component } from '@angular/core';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  dif = 1;

  constructor( private paisService: PaisService ) {  }

  buscar(  event: string ){
    
    this.hayError = false;
    this.termino  = event;

    this.paisService.buscarCapital( this.termino )
    .subscribe ( resp => {
      this.paises = resp;
    
    },( err ) =>{
      this.hayError = true;
      this.paises = [];

    }); 
  }

  sugerencias( event: string) {
    if( event.trim() != '') this.buscar(event)
    this.hayError = false;
  }
}
