import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Marca } from '../model/Marca';
import { Motivo } from '../model/Motivo';
import { Produto } from '../model/Produto';
import { ProdutoDevolucao } from '../model/ProdutoDevolucao';
import { CategoriaService } from '../service/categoria.service';
import { MarcaService } from '../service/marca.service';
import { MotivoService } from '../service/motivo.service';
import { ProdutoDevolucaoService } from '../service/produto-devolucao.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-devolvido',
  templateUrl: './devolvido.component.html',
  styleUrls: ['./devolvido.component.css'],
})
export class DevolvidoComponent implements OnInit {

  codDev: string = 'D3V' + Math.floor(Math.random() * 1999 + 1);

  produto = new Produto();
  listaProduto: Produto[];

  categoria = new Categoria();
  listaCategoria: Categoria[];
  idCategoria: number;

  marca = new Marca();
  listaMarca: Marca[];
  idMarca: number;

  motivo = new Motivo();
  listaMotivo: Motivo[];
  idMotivo: number;

  prodDev = new ProdutoDevolucao();
  listaProdDev: ProdutoDevolucao[];
  idProdDev: number


  constructor(
    private prodDevService: ProdutoDevolucaoService,
    private motivoService: MotivoService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.findAllCategoria();
    this.findAllMarca();
    this.findAllMotivo();
    this.findAllProdDev();
  }

  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findAllMarca() {
    this.marcaService.getByAllMarcas().subscribe((resp: Marca[]) => {
      this.listaMarca = resp;
    });
  }

  findAllMotivo() {
    this.motivoService.getAllMotivos().subscribe((resp: Motivo[]) => {
      this.listaMotivo = resp;
    });
  }

  findByIdMotivo() {
    this.motivoService
      .getByIdMotivo(this.idMotivo)
      .subscribe((resp: Motivo) => {
        this.motivo = resp;
      });
  }

  findByIdMarca() {
    this.marcaService.getByIdMarca(this.idMarca).subscribe((resp: Marca) => {
      this.marca = resp;
    });
  }

  findAllProdDev() {
    this.prodDevService
      .getAllProdDev()
      .subscribe((resp: ProdutoDevolucao[]) => {
        this.listaProdDev = resp;
      });
  }

  findByIdProdDev(){
    this.prodDevService.getByIdProdDev(this.idProdDev).subscribe((resp: ProdutoDevolucao)=>{
      this.prodDev = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  registrar() {
    this.prodDev.codigoDevolucao = this.codDev
    this.categoria.id = this.idCategoria;
    this.prodDev.categoriaProd = this.categoria;
    this.prodDev.marca = this.marca;
    this.prodDev.motivo = this.motivo;

    if (this.prodDev.nomeProdutoDevolucao == null) {
      alert('Preencha todos os campos!');
    } else {
      this.prodDevService
        .postProdDev(this.prodDev)
        .subscribe((resp: ProdutoDevolucao) => {
          this.prodDev = resp;
          this.prodDev = new ProdutoDevolucao();
          alert('Devolução registrada com sucesso!');
        });
    }
  }
}
