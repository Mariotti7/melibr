import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  produto = new Produto()
  listaProduto: Produto[]

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

}
