import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TipoConta } from 'src/app/models/tipoconta';

@Component({
  selector: 'app-listar-tipoconta',
  templateUrl: './listar-tipoconta.component.html',
  styleUrls: ['./listar-tipoconta.component.css']
})
export class ListarTipocontaComponent implements OnInit {

  tipoconta!: TipoConta[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<TipoConta[]>("https://localhost:5001/api/tipoconta/listar")
    .subscribe({
      next: (tipoconta) => {

        this.tipoconta = tipoconta;
        console.log(tipoconta);
       
      }
    })
  }

}