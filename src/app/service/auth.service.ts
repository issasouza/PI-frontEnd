import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: User | undefined;

  constructor(
    private http: HttpClient 
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }
  cadastrar(user: User):Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }
  atualizar(user:User): Observable<User>{
    return this.http.put<User>('http://localhost:8080/usuarios/atualizar', user)
  }
  getByIdUser(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
  }
 findByUsuario(usuario:String): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/esquecisenha/${usuario}`)
  }

  logado(){
    let ok: boolean =false
    
    if(environment.token != ''){
      ok =true
    }
    return ok
  }

}
//http://localhost:8080