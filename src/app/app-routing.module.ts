import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

  {path: "", redirectTo: 'lading-page', pathMatch:'full'},

  {path:'lading-page', component: LadingPageComponent},
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'sobre-nos', component:SobreNosComponent},
  {path: 'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
