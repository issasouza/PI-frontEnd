import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produtos } from 'src/app/model/Produtos';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent implements OnInit {

  produtos: Produtos = new Produtos()
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria:number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
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

  atualizar(){
    this.categoria.id = this.idCategoria
    this.produtos.categoria= this.categoria

    this.produtosService.putProdutos(this.produtos).subscribe((resp: Produtos)=>{
      this.produtos = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/produtos'])
    })

  }


}
