import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {GravaService} from "../../services/grava.service";
import {Acesso} from "../../models/acesso";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

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
    this.acesso.url = 'sobre';
    this.acesso.dataHora = this.data.toLocaleString();

    this.gravaService.cadastrarAcesso(this.acesso)
      .subscribe(
        acesso => this.acesso,
        error => this.msgError = <any>error);

    this.openSnackBar('Acesso "sobre" registrado.', 'OK');
  }

  openSnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action, {duration: 1000});
  }


}
