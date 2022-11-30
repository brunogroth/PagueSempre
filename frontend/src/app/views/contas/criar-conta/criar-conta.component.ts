import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from 'src/app/models/conta';
import { TipoConta } from 'src/app/models/tipoconta';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  id?: number;
  nome!: string;
  descricao!: string;
  valor!: number;
  dataVencimento!: Date;
  status!: boolean;
  tipoconta_id!: number;
 
  //para fazer o select do tipo de conta na hora de cadastrar
  tipoconta!: TipoConta[];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //para fazer o select do tipo conta na hora de cadastrar
    this.http.get<TipoConta[]>("https://localhost:5001/api/tipoconta/listar")
    .subscribe({
      next: (tipoconta) => {
        this.tipoconta = tipoconta;
      }
    })

    //Para pegar o ID da conta
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Conta>(`https://localhost:5001/api/Contas/list/search/${id}`)
          .subscribe({
            next: (conta) => {
              this.id = id;
              this.nome = conta.nome;
              this.descricao = conta.descricao;
            }
          })
        }
      }
    })
  }

  //função para alterar
  alterar(): void {
    let conta: Conta = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      valor: this.valor,
      dataVencimento: '2022-11-22T00:51:59.100Z', //Dado estático
      status: false, //Dado estático
      tipoconta_id: 1 //eu sinceramnte nao sei porque tem esse aqui mas só consegui fazer fucionar com ele haha
    };

    this.http.patch<Conta>("https://localhost:5001/api/contas/alterar", conta)
    .subscribe({
      next: (conta) => {
        this.router.navigate(["pages/conta/listar"]);
      },
    });
  }

  //função para cadastrar
  cadastrar(): void {

    let conta: Conta = {
      nome: this.nome,
      descricao: this.descricao,
      valor: this.valor,
      dataVencimento: '2022-11-22T00:51:59.100Z', //Dado estático
      status: false, //Dado estático
      tipoconta_id: 1 //eu sinceramnte nao sei porque tem esse aqui mas só consegui fazer fucionar com ele haha
      
      
    };

    this.http.post<Conta>("https://localhost:5001/api/contas/cadastrar", conta)
    .subscribe({
      next: (conta) => {
        this.router.navigate(["contas"])
      }
    })
  }
}
