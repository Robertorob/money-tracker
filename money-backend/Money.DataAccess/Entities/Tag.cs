namespace Money.DataAccess.Entities;
public class Tag
{
  public long Id { get; set; }

  public string Name { get; set; }

  public ICollection<Spending>? Spendings { get; set; }
}
