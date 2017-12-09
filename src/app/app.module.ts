import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PrecoComponent } from './paginas/preco/preco.component';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSortModule,
  MatToolbarModule
} from '@angular/material';
import 'hammerjs';
import { ExplicacaoComponent } from './paginas/explicacao/explicacao.component';
import {HttpClientModule} from '@angular/common/http';
import {GravaService} from './services/grava.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import { ConsultaComponent } from './consulta/consulta.component';
import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: 'AIzaSyAVQAkUkeJYiwzd7CPMtkwa5YajGnYzFck',
  authDomain: 'front-teste-rd.firebaseapp.com',
  databaseURL: 'https://front-teste-rd.firebaseio.com',
  storageBucket: 'front-teste-rd..appspot.com',
  messagingSenderId: '49363467443'
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    PrecoComponent,
    ExplicacaoComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSortModule
  ],
  providers: [GravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
