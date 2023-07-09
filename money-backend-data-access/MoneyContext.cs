using Microsoft.EntityFrameworkCore;
using money_backend_data_access.Entities;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace money_backend_data_access;
public class MoneyContext : DbContext
{
  public MoneyContext(DbContextOptions<MoneyContext> options) : base(options) { }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
  }

  public DbSet<Spending> Spendings { get; set; }
}
