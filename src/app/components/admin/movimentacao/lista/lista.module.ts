import { ComumModule } from './../../../../modules/comum/comum.module';
import { NgModule } from '@angular/core';
import { ListaRoutingModule } from './lista-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    ComumModule,
    NgSelectModule,
    ListaRoutingModule
  ]
})
export class ListaModule { }
