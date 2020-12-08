import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../model/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getByAllMarcas(){
    return this.http.get('http://localhost:8080/marca', this.token)
  }

  getByIdMarca(id:number){
    return this.http.get(`http://localhost:8080/marca/id/${id}`, this.token)
  }

  postMarca(marca: Marca){
    return this.http.post('http://localhost:8080/marca', marca, this.token)
  }
  
}
