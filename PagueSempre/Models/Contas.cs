using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace PagueSempre.Models
{
    public class Contas
    {
        public int ID {get; set;}

       [Required(ErrorMessage = "Você deve informar o nome da sua conta")]
        public string Nome {get; set;}

        public string Descricao {get; set;}
        [Required(ErrorMessage = "Você deve informar o valor da sua conta.")]
        public double Valor {get; set;}
        
        [Required(ErrorMessage = "Você deve informar a data de vencimento da sua conta.")]
        public DateTime DataVencimento{get; set;}

        public Boolean Status {get; set;}

        [ForeignKey("TipoConta")]
        [Column("TipoConta")]
        public int TipoConta_ID {get; set;}
        public virtual TipoConta TipoConta {get; set;}
    }
   
}