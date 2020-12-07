import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  produto = new Produto()
  listaProduto: Produto[]

  categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService:CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategoria()
  }

  enviar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if(this.produto.nome == null || this.produto.estadoProduto == null || this.produto.tipoAvaria == null){
      alert('Preencha todos os campos!')
    }else{
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.produto = new Produto()
      alert('Pedido enviado com sucesso')
      this.findAllProdutos()
    })
  }
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

}
