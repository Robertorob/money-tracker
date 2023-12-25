namespace Money.BusinessLogic.Dto.Spending;

public class UpdateSpendingDto
{
    public long Id { get; set; }

    public double Cost { get; set; }

    public string Comment { get; set; }

    public long? CategoryId { get; set; }
}