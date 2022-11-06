import { Produtos } from "./Produtos"
export class User{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public produtos: Produtos[]
}