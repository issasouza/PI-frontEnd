import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão diferentes')
    }
    else if (!this.user.nome) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Nome');
    }
    else if (!this.user.sobrenome) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Sobrenome');
    }
    else if (!this.user.cpf) {
      this.alertas.showAlertDanger('Por favor, preencha o campo CPF');
    }
    else if (this.user.cpf.length < 11) {
      this.alertas.showAlertDanger('O CPF deve ter 11 caracteres')
    }
    else if (this.user.telefone.length < 11) {
      this.alertas.showAlertDanger('O Telefone deve ter 11 caracteres')
    }
    else if (!this.user.telefone) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Telefone');
    }
    else if (!this.user.usuario.includes('@') || !this.user.usuario.includes('.')) {
      this.alertas.showAlertDanger('O Email deve ter um formato válido')
    }
    else if (this.user.senha.length < 8) {
      this.alertas.showAlertDanger('A senha tem que ter no minimo 8 caracteres')
    }
    else if (!this.user.senha) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Senha');
    }
    else if (!this.user.cep) {
      this.alertas.showAlertDanger('Por favor, preencha o campo CEP');
    }
    else if (this.user.cep.length < 8) {
      this.alertas.showAlertDanger('O campo CEP deve ter 8 caracteres')
    }
    else if (!this.user.pais) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Pais');
    }
    else if (!this.user.estado) {
      this.alertas.showAlertDanger('Por favor, preencha o campo UF');
    }
    else if (!this.user.cidade) {
      this.alertas.showAlertDanger('Por favor, preencha o campo Cidade');
    }
    else if(!this.user.bairro){
      this.alertas.showAlertDanger('Por favor, preencha o campo Bairro');
    }
    else if(!this.user.rua){
      this.alertas.showAlertDanger('Por favor, preencha o campo Rua');
    }
    else if(!this.user.numero){
      this.alertas.showAlertDanger('Por favor, preencha o campo Numero');
    }

    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }


}
