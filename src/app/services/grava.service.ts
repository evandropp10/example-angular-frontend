/**
 * Created by Evandro on 07/12/2017.
 */
import {Injectable} from '@angular/core';
import {Acesso} from '../models/acesso';
import {Usuario} from '../models/usuario';

import {HttpClient, HttpHeaders} from '@angular/common/http';




@Injectable()
export class GravaService {

  private API_URL: string = 'https://gleaming-orbit-188218.appspot.com/';

  url(path: string) {
    return this.API_URL + path;
  }

  constructor(private http: HttpClient) {
  }


  listarTodos() {

    return this.http.get(this.url('lista'));

  }


  cadastrarAcesso(acesso: Acesso) {

    let params = JSON.stringify(acesso);


    return this.http.post(this.url('registra'), params);
  }



  cadastrarUsuario(usuario: Usuario) {
    let params = JSON.stringify(usuario);

    return this.http.post(this.url('registrausuario'), params);

  }

}
