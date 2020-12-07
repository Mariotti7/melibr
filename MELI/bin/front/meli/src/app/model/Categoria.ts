import { Produto } from './Produto'
import { ProdutoDevolucao } from './ProdutoDevolucao'

export class Categoria{
    public id: number
    public descricao: string
    public produto: Produto[]
    public siglaCategoria: string
    public produtoDevolucao: ProdutoDevolucao[]
}