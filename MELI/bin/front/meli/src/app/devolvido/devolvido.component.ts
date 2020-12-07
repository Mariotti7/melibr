import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-devolvido',
  templateUrl: './devolvido.component.html',
  styleUrls: ['./devolvido.component.css']
})
export class DevolvidoComponent implements OnInit {

  nome: string
  motivo: string
  codDev: string

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

  codigo = () => this.codDev = "D3V" + Math.floor((Math.random() * 1999) + 1)
  
  registrar(){
    alert('produto registrado')
    this.nome = 'iPhone'
    this.motivo = 'Não entregue'
    this.codigo()
  }

}
