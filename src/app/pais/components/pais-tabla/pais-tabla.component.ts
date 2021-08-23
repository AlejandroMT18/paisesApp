import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent{

  @Input() paises: Pais[] = []
  @Input() dif = 0;


  constructor() { }



}
