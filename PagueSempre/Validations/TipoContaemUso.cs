using System.ComponentModel.DataAnnotations;
using System.Linq;
using PagueSempre.Models;

namespace PagueSempre.Validations
{
    public class TipoContaemUso : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string nome = (string)value; //nome em uso
           
            DataContext context =
            (DataContext)
            validationContext.
            GetService(typeof(DataContext));

                TipoConta resultado = 
                context.TipoConta.FirstOrDefault
                (
                    f => f.Nome.Equals(nome)
                );
            return resultado == null ? 
            ValidationResult.Success : 
            new ValidationResult("Esse tipo de conta já foi cadastrado");
        }
    }
}