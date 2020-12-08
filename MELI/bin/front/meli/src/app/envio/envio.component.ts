import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  codEnv: string = '3NV' + Math.floor((Math.random()*1999)+1);

  produto = new Produto();
  listaProduto: Produto[];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  rastrear(){

    this.produto.numeroPedido = this.codEnv

    if(this.produto.nome == ''){
    alert('Preencha com o nome do produto')
    }else{
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto = resp
        alert('Achei o seu produto')
      })
      
    }
  }

}
