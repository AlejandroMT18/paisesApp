import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/respuestaPaisesName.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  buscarPais( args: string ): Observable<Pais[]> {
    
    const url =  `${ this.apiURL }/name/${ args }`;
    
    return this.http.get<Pais[]>( url, { params: this.httpParams} );
    
    
  }

  buscarCapital( args: string ): Observable<Pais[]> {
    
    const url =  `${ this.apiURL }/capital/${ args }`;
    
    return this.http.get<Pais[]>( url, {params: this.httpParams} );
    
  }

  getPaisAlpha( id: string): Observable<Pais>{

    const url =  `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Pais>( url );

  }

   get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population' );
  }

  getPaisRegion ( region: string):Observable<Pais[]>{

    const url =  `${ this.apiURL }/region/${ region }`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} ).pipe( tap(console.log) );

  }

}
