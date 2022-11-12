import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


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
  {path: 'produtos-delete/:id', component: ProdutosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
