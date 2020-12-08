import { Categoria } from './Categoria'
import { Marca } from './Marca'
import { Motivo } from './Motivo'

export class ProdutoDevolucao{
    public idProdutoDevolucao: number
    public nomeProdutoDevolucao: string
    public categoriaProd: Categoria
    public marca: Marca   
    public motivo: Motivo 
    public codigoDevolucao: string
}