import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarContaComponent } from './views/contas/listar-conta/listar-conta.component';
import { CriarContaComponent } from './views/contas/criar-conta/criar-conta.component';
import { CriarTipocontaComponent } from './views/tipoconta/criar-tipoconta/criar-tipoconta.component';
import { ListarTipocontaComponent } from './views/tipoconta/listar-tipoconta/listar-tipoconta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarContaComponent,
    CriarContaComponent,
    CriarTipocontaComponent,
    ListarTipocontaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
