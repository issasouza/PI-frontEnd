import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {
  
  token: string;
  senha: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];

  }
  onSubmit() {
    this.http.post('usuarios/trocar-senha', { token: this.token, password: this.senha })
      .subscribe(
        () => this.router.navigate(['/login']),
        error => console.error(error)
      );
  }


}
