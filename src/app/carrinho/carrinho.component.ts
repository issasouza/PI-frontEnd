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

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
  }

  removerDoCarrinho(produto: Produtos) {
    this.carrinhoService.removerProduto(produto);
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }
}
