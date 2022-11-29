using Microsoft.EntityFrameworkCore;


namespace PagueSempre.Models
{
    //Classe que reprenta o banco de dados dentro da aplicação
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }

      public DbSet<Contas> Contas { get; set; }
      public DbSet<TipoConta> TipoConta { get; set; }

    }
}