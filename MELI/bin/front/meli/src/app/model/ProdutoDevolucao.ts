import { Categoria } from './Categoria'
import { Marca } from './Marca'
import { Motivo } from './Motivo'

export class ProdutoDevolucao{
    public idProdutoDevolucao: number
    public nomeProdutoDevolucao: string
    public date: Date
    public categoria: Categoria
    public marca: Marca   
    public motivo: Motivo 
    public codigoDevolucao: string
}