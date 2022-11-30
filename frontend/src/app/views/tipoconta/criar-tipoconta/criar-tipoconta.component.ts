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


  }

  cadastrar(): void {
    let tipoconta: TipoConta = {

      nome: this.nome,
      descricao: this.descricao,
    };

    this.http.post<TipoConta>("https://localhost:5001/api/tipoconta/criar", tipoconta)
    .subscribe({
      next: (tipoconta) => {
      this.router.navigate(["tipoconta/listar"])  
      }
    })
  }

}
