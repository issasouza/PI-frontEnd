import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produtos } from 'src/app/model/Produtos';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produtos: Produtos = new Produtos()
  idProduto:number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private alertas: AlertasService
  ) { }


  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProduto)

  }

  findByIdProdutos(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }

  apagar(){
  this.produtosService.deleteProdutos(this.idProduto).subscribe(()=>{
    this.alertas.showAlertSuccess('Produto apagado com sucesso!')
    this.router.navigate(['/produtos'])
  })

  }
}