import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  myMethodCEP(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
