using System;
using System.ComponentModel.DataAnnotations;
using PagueSempre.Validations;

namespace PagueSempre.Models
{
    public class TipoConta
    {
        public int ID {get; set;}
    [TipoContaemUso]
        public string Nome {get; set;}

        public string Descricao {get; set;}
    }
   
}