import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { LadingPageComponent } from './lading-page/lading-page.component';

const routes: Routes = [

  {path: "", redirectTo: 'entrar', pathMatch:'full'},

  {path:'lading-page', component: LadingPageComponent},
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
