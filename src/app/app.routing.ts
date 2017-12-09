/**
 * Created by Evandro on 06/12/2017.
 */
import { Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PrecoComponent } from './paginas/preco/preco.component';
import { ExplicacaoComponent } from './paginas/explicacao/explicacao.component';
import { ConsultaComponent } from './consulta/consulta.component';


export const AppRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: ExplicacaoComponent
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'sobre',
      component: SobreComponent
    }, {
      path: 'preco',
      component: PrecoComponent
    }, {
      path: 'contato',
      component: ContatoComponent
    }, {
      path: 'consulta',
      component: ConsultaComponent
    }]
}];
