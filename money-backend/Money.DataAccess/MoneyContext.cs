using Microsoft.EntityFrameworkCore;
using Money.DataAccess.Entities;

namespace Money.DataAccess;
public class MoneyContext : DbContext
{
  public MoneyContext(DbContextOptions<MoneyContext> options) : base(options) { }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseSnakeCaseNamingConvention();
  }

  public DbSet<Spending> Spendings { get; set; }
}
