import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public enviouEmail = false;
  public telaConsulta = false;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.localStorage.store('SessionID', Math.random());
  }


}
