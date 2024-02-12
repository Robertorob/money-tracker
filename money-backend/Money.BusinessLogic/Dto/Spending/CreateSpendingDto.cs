namespace Money.BusinessLogic.Dto.Spending;

public class CreateSpendingDto
{
    public double Cost { get; set; }

    public string Comment { get; set; }

    public long? TagId { get; set; }
}