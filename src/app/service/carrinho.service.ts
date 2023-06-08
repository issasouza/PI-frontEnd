import { Injectable } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho: Produtos[] = [];

  private produto: ProdutosService
  constructor() { }

  adicionarProduto(produto: Produtos) {
    this.carrinho.push(produto);
  }

  limparCarrinho() {
    this.carrinho = [];
  }
  removerProduto(produto: Produtos) {
    const index = this.carrinho.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
    }
  }

  getCarrinho() {
    return this.carrinho;
  }

}

