using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PagueSempre.Models
{
    public class Contas
    {
        public int ID {get; set;}

        public string Nome {get; set;}

        public string Descricao {get; set;}

        public double Valor {get; set;}

        public DateTime DataVencimento{get; set;}

        public Boolean Status {get; set;}

        [ForeignKey("TipoConta")]
        [Column("TipoConta")]
        public int TipoConta_ID {get; set;}
        public virtual TipoConta TipoConta {get; set;}
    }
   
}