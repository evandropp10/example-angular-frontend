import { Component, OnInit } from '@angular/core';
import {GravaService} from "../services/grava.service";
import {Sort} from '@angular/material';
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public registros;

  constructor(
    private gravaService: GravaService,
    public appC: AppComponent
  ) {
  }

  ngOnInit() {
    this.atualizaLista();

    this.appC.telaConsulta = true;
  }

  atualizaLista() {

    this.gravaService.listarTodos()
      .subscribe(res => {
        this.registros = res;
      });

  }


  sortData(sort: Sort) {
    const dados = this.registros.slice();
    if (!sort.active || sort.direction == '') {
      this.registros = dados;
      return;
    }

    this.registros = dados.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'email':
          return compare(a.email, b.emial, isAsc);
        case 'idVisitante':
          return compare(+a.idVisitante, +b.idVisitante, isAsc);
        case 'url':
          return compare(+a.url, +b.url, isAsc);
        case 'dataHora':
          return compare(+a.dataHora, +b.dataHora, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

