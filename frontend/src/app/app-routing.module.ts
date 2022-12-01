import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './views/contas/criar-conta/criar-conta.component';
import { ListarContaComponent } from './views/contas/listar-conta/listar-conta.component';
import { CriarTipocontaComponent } from './views/tipoconta/criar-tipoconta/criar-tipoconta.component';
import { ListarTipocontaComponent } from './views/tipoconta/listar-tipoconta/listar-tipoconta.component';

const routes: Routes = [
  { path: 'contas', component: ListarContaComponent },
  { path: 'contas/criar', component: CriarContaComponent },
  { path: 'contas/alterar/:id', component: CriarContaComponent },
  { path: 'tipoconta/criar', component: CriarTipocontaComponent },
  { path: 'tipoconta/listar', component: ListarTipocontaComponent },
  { path: 'tipoconta/alterar/:id', component: CriarTipocontaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
