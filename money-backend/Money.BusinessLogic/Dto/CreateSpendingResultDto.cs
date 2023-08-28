namespace Money.BusinessLogic.Dto;

public class CreateSpendingResultDto
{
  public long Id { get; set; }

  public double Cost { get; set; }

  public string Comment { get; set; }

  public long? CategoryId { get; set; }
}