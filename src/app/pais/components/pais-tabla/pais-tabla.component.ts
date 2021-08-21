import { Component, Input, OnInit } from '@angular/core';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';
import { Pais } from '../../interfaces/respuestaPaisesName.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent{

  @Input() paises: Pais[] = []

  constructor() { }



}
