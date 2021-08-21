import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/respuestaPaisesName.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  buscarPais( args: string ): Observable<Pais[]> {
    
    const url =  `${ this.apiURL }/name/${ args } `;
    
    return this.http.get<Pais[]>( url );
    
    
  }

  buscarCapital( args: string ): Observable<Pais[]> {
    
    const url =  `${ this.apiURL }/capital/${ args } `;
    
    return this.http.get<Pais[]>( url );
    
    
  }

}
