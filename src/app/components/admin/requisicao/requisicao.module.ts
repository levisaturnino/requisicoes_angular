import { ListaComponent } from './../movimentacao/lista/lista.component';

import { NgModule } from '@angular/core';
import { RequisicaoRoutingModule } from './requisicao-routing.module';
import { RequisicaoComponent } from './requisicao.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComumModule } from 'src/app/modules/comum/comum.module';
import { MovimentacaoComponent } from '../movimentacao/movimentacao.component';

@NgModule({
  declarations: [RequisicaoComponent, MovimentacaoComponent,  ListaComponent],

  imports: [
    ComumModule,
     RequisicaoRoutingModule,
     NgSelectModule
  ]
})
export class RequisicaoModule { }
