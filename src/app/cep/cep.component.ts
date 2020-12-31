import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  cep: string = '';
  cepapi: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {}

  cepApi(): void {
    this._http.myMethodCEP(this.cep).subscribe(data => { this.cepapi = data; console.log(this.cepapi); });
  }

}
