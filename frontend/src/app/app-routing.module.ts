import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CriarContaComponent } from './views/contas/criar-conta/criar-conta.component';
import { ListarContaComponent } from './views/contas/listar-conta/listar-conta.component';

const routes: Routes = [
  { path: 'contas', component: ListarContaComponent },
  { path: 'contas/criar', component: CriarContaComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppRoutingModule { }
