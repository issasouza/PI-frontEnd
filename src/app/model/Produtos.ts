import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produtos{
    public id: number
    public nome: string
    public preco: number
    public descricao: string
    public quantidade: number
    public foto: string
    public precoUnitario:number
    public usuario: User
    public categoria: Categoria
}