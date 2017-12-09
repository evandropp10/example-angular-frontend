import { Component, OnInit } from '@angular/core';
import {Acesso} from "../../models/acesso";
import {GravaService} from "../../services/grava.service";
import {LocalStorageService} from "ngx-webstorage";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.css']
})
export class PrecoComponent implements OnInit {

  acesso: Acesso;
  msgError: string;
  data: Date;

  constructor(
    private gravaService: GravaService,
    private localStorage: LocalStorageService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.data = new Date;
    this.acesso = new Acesso();
    this.acesso.idVisitante = this.localStorage.retrieve('SessionID').toString();
    this.acesso.url = 'preco';
    this.acesso.dataHora = this.data.toLocaleString();

    this.gravaService.cadastrarAcesso(this.acesso)
      .subscribe(
        acesso => this.acesso,
        error => this.msgError = <any>error);

    this.openSnackBar('Acesso "preco" registrado.', 'OK');
  }

  openSnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action, {duration: 1000});
  }

}
