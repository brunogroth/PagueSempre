import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoConta } from 'src/app/models/tipoconta';

@Component({
  selector: 'app-criar-tipoconta',
  templateUrl: './criar-tipoconta.component.html',
  styleUrls: ['./criar-tipoconta.component.css']
})
export class CriarTipocontaComponent implements OnInit {

  id!: number;
  nome!: string;
  descricao!: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if(id !== undefined){
      this.http.get<TipoConta>("https://localhost:5001/api/tipoconta/lista/buscar/"+id)
    //Executar a requisição
      .subscribe({
        next: (tipoconta) => {
          this.id = id;
          this.nome = tipoconta.nome;
          this.descricao = tipoconta.descricao;
          }
        });
      }
    }
  })

  }

  cadastrar(): void {
    let tipoconta: TipoConta = {
      nome: this.nome,
      descricao: this.descricao,
    };

    this.http.post<TipoConta>("https://localhost:5001/api/TipoConta/criar", tipoconta)
    .subscribe({
      next: (tipoconta) => {
      this.router.navigate(["tipoconta/listar"])  
      }
    })
  }
  //função para alterar
  alterar(): void {
    let tipoconta: TipoConta = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
    };

    this.http.patch<TipoConta>("https://localhost:5001/api/tipoconta/alterar", tipoconta)
    .subscribe({
      next: () => {
        this.router.navigate(["tipoconta/listar"]);
      },
    });
  }
}
