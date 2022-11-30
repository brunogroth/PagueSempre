import { TipoConta } from "./tipoconta";

export interface Conta {

    id?: number,
    nome: string,
    descricao: string,
    valor: number,
    dataVencimento: string, 
    status: boolean,
    tipoconta?: TipoConta[],
    // tipoconta: TipoConta[] não precisa pré definir porque ele busca no for do HTML
    tipoconta_id?: number

}


//  public string Nome {get; set;}

//  public string Descricao {get; set;}
//  public double Valor {get; set;}
 
//  public DateTime DataVencimento{get; set;}

//  public Boolean Status {get; set;}

//  [ForeignKey("TipoConta")]
//  [Column("TipoConta")]
//  public int TipoConta_ID {get; set;}