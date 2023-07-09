import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produtos } from '../model/Produtos';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {

  produtos: Produtos = new Produtos()
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria:number

  listaProdutos: Produtos[]
  
  carrinho: Produtos[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService,
    private carrinhoService: CarrinhoService,
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    let id= this.route.snapshot.params['id']
    this.findByIdProdutos(id)
    this.findAllCategoria()
    
  }
  findByIdProdutos(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this,this.categoria = resp
    })
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias =resp
    })
  }

  adicionarAoCarrinho(produto: Produtos) {
    this.carrinhoService.adicionarProduto(produto);
   

    if (!produto.quantidade ) {
      produto.quantidade = 1;
      produto.preco = produto.precoUnitario;
      produto.preco = produto.precoUnitario;
      
    } else if (produto.quantidade >= 1) {
      produto.preco = produto.precoUnitario * produto.quantidade;
    }
    
    this.alertas.showAlertSuccess("Item adicionado ao carrinho");
  }
  
}
