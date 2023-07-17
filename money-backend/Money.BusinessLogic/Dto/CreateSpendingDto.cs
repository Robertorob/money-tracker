namespace Money.BusinessLogic.Dto;

public class CreateSpendingDto
{
  public double Cost { get; set; }

  public string Comment { get; set; }

  public long CategoryId { get; set; }
}