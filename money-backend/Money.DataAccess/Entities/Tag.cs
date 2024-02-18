namespace Money.DataAccess.Entities;
public class Tag
{
  public long Id { get; set; }

  public string Name { get; set; }

  public IEnumerable<Spending>? Spendings { get; set; }
}
