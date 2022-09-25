using System;

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


    }
   
}