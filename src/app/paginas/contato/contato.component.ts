import { Component, OnInit } from '@angular/core';
//import {RegistraService} from '../../services/registra.service';
import {GravaService} from '../../services/grava.service';
import {Usuario} from "../../models/usuario";
import {LocalStorageService} from "ngx-webstorage";
import {Acesso} from "../../models/acesso";
import {MatSnackBar} from "@angular/material";
import {AppComponent} from "../../app.component";



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  email: string;
  usuario: Usuario;
  acesso: Acesso;
  msgError: string;
  data: Date;

  constructor(
    private gravaService: GravaService,
    private localStorage: LocalStorageService,
    public snackBar: MatSnackBar,
    private appC: AppComponent
  ) { }

  ngOnInit() {

    this.data = new Date;
    this.acesso = new Acesso();
    this.acesso.idVisitante = this.localStorage.retrieve('SessionID').toString();
    this.acesso.url = 'contato';
    this.acesso.dataHora = this.data.toLocaleString();

    this.gravaService.cadastrarAcesso(this.acesso)
      .subscribe(
        acesso => this.acesso,
        error => this.msgError = <any>error);

    this.openSnackBar('Acesso "contato" registrado.', 'OK');

  }

  enviar() {

    if (this.appC.enviouEmail == true) {
      alert('E-mail já foi enviado.');
      return;
    }

    this.usuario = new Usuario();

    this.usuario.email = this.email;
    this.usuario.idVisitante = this.localStorage.retrieve('SessionID').toString();

    this.gravaService.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario => this.usuario,
        error => this.msgError = <any>error);

    this.appC.enviouEmail = true;

    this.openSnackBar('E-mail do visitante registrado.', 'OK');

  }

  openSnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action, {duration: 1000});
  }

}
