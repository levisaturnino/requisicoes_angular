import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './components/public/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/painel', loadChildren: () => import('./components/admin/painel/painel.module') .then(m => m.PainelModule), canActivate: [AuthguardService]},
  { path: 'admin/departamento', loadChildren: () => import('./components/admin/departamento/departamento.module').then(m => m.DepartamentoModule), canActivate: [AuthguardService]},
  { path: 'admin/funcionario',  loadChildren: () => import('./components/admin/funcionario/funcionario.module').then(m => m.FuncionarioModule), canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
