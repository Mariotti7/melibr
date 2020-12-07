import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  nome: string
  codEnv: string 

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

  codigo = () => this.codEnv = '3NV'+ Math.floor((Math.random()*1999)+1);

  rastrear(){
    alert('Achei o seu produto')
    this.nome = 'iPhone'
    this.codigo()
  }

}
