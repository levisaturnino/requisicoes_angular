import { ListaComponent } from './lista/lista.component';
import { MovimentacaoComponent } from './movimentacao.component';
import { ComumModule } from './../../../modules/comum/comum.module';
import { NgModule } from '@angular/core';
import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    ComumModule,
    MovimentacaoRoutingModule,
    NgSelectModule
  ]
})
export class MovimentacaoModule { }
