import { Categoria } from './Categoria'

export class Produto{
    public id: number
    public nome: string
    public estadoProduto: string
    public tipoAvaria: string
    public categoria: Categoria
}