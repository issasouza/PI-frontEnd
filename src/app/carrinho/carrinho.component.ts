import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produtos[] = [];
  produtos: Produtos
  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
    
  }

  removerDoCarrinho(produto: Produtos) {
    this.carrinhoService.removerProduto(produto);
  }
  diminuirQuantidade(produto: Produtos) {
    if (produto.quantidade > 1) {
      produto.quantidade--; 
      produto.preco = produto.precoUnitario * produto.quantidade;
    }else{
      this.removerDoCarrinho(produto)
    }
  }
  aumentarQuantidade(produto: Produtos) {
    if (produto.quantidade > 0) {
      produto.quantidade++; 
      produto.preco = produto.precoUnitario * produto.quantidade;
    }
  }
  valorTotal() {
    let total = 0;
    for (const produto of this.carrinho) {
      total += produto.preco;
    }
    return total;

  }
  

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }
}