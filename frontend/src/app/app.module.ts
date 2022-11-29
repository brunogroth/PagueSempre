import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarContaComponent } from './views/contas/listar-conta/listar-conta.component';
import { CriarContaComponent } from './views/contas/criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarContaComponent,
    CriarContaComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
