import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDevolucao } from '../model/ProdutoDevolucao';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDevolucaoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdDev(){
    return this.http.get('http://localhost:8080/produto-devolucao', this.token)
  }

  getByIdProdDev(id:number){
    return this.http.get(`http://localhost:8080/produto-devolucao/id/${id}`, this.token)
  }

  postProdDev(prodDev: ProdutoDevolucao){
    return this.http.post('http://localhost:8080/produto-devolucao', prodDev, this.token)
  }

}
