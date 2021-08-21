import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) {  }

  buscar(  event: string ){
    
    this.hayError = false;
    this.termino  = event;

    this.paisService.buscarPais( this.termino )
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
    console.log(event);
  }

}
