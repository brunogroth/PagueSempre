import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/conta';
import { TipoConta } from 'src/app/models/tipoconta';

@Component({
  selector: 'app-listar-conta',
  templateUrl: './listar-conta.component.html',
  styleUrls: ['./listar-conta.component.css']
})
export class ListarContaComponent implements OnInit {

  tipoconta!: TipoConta[]
  contas!: Conta[];

  constructor(private http: HttpClient) { }

  //Lista todas as contas
  ngOnInit(): void {
    this.http.get<Conta[]>("https://localhost:5001/api/contas/listar")
    .subscribe({
      next: (contas) => {
        this.contas = contas; 
        console.log(contas)
      }
    })
  }
  
  //Remove a conta pelo ID ao ser clicado
  remover(id: number): void {
    this.http.delete<Conta>(`https://localhost:5001/api/contas/deletar/${id}`)
    .subscribe({
      next: (conta) => {
        this.ngOnInit();
      },
    });
  }


}
