import { Produtos } from "./Produtos";
import { User } from "./User";


export class Carrinho{
    public id:number;
    public cart:string;
    public precoTotal:number
    public produtos:Produtos[]
    public usuario: User
}