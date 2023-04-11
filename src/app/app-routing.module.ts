import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { InicioComponent } from './inicio/inicio.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TrocaSenhaComponent } from './troca-senha/troca-senha.component';
import { AdicionarProdutosComponent } from './adicionar-produtos/adicionar-produtos.component';


const routes: Routes = [

  {path: "", redirectTo: 'lading-page', pathMatch:'full'},

  {path:'lading-page', component: LadingPageComponent},
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  
  {path:'sobre-nos', component:SobreNosComponent},
  {path: 'inicio', component:InicioComponent},

  {path:'produtos', component:ProdutosComponent},
  {path:'categorias',component:CategoriasComponent},

  {path: 'categoria-edit/:id', component:CategoriaEditComponent},
  {path: 'categoria-delete/:id', component:CategoriaDeleteComponent},
  {path: 'produtos-edit/:id', component: ProdutosEditComponent},
  {path: 'produtos-delete/:id', component: ProdutosDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'lojas', component: LojasComponent},
  {path: 'produto-view/:id', component: ProdutoViewComponent},
  {path: 'adicionar-produtos', component: AdicionarProdutosComponent},
  {path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path: 'troca-senha', component:TrocaSenhaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
