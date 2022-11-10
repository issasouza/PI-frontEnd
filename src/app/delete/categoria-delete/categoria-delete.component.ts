import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number
  

  constructor(
    private categoriaSevice: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      }
      this.idCategoria= this.route.snapshot.params['id']
      this.findByCategoria(this.idCategoria)
  }

  findByCategoria(id:number){
    this.categoriaSevice.getByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaSevice.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Categoria apagada com sucesso')
      this.router.navigate(['/categorias'])
    })
  }
  

}
