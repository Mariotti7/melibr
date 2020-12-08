import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Motivo } from '../model/Motivo';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllMotivos(){
    return this.http.get('http://localhost:8080/motivo', this.token)
  }

  getByIdMotivo(id:number){
    return this.http.get(`http://localhost:8080/motivo/id/${id}`, this.token)
  }

  postMotivo(motivo:Motivo){
    return this.http.post('http://localhost:8080/motivo', motivo, this.token)
  }

}
