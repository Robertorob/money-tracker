namespace Money.BusinessLogic.Dto;

public class GetSpendingDto
{
  public long Id { get; set; }

  public double Cost{ get; set; }

  public string Comment{ get; set; }

  public CategoryDto? Category { get; set; }
}