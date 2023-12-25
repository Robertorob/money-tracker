using Money.BusinessLogic.Dto.Category;

namespace Money.BusinessLogic.Dto.Spending;

public class CreateSpendingResultDto
{
    public long Id { get; set; }

    public double Cost { get; set; }

    public string Comment { get; set; }

    public CategoryDto? Category { get; set; }
}