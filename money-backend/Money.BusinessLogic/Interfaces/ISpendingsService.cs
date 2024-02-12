using Money.BusinessLogic.Dto.Tag;
using Money.BusinessLogic.Dto.Spending;

namespace Money.BusinessLogic.Interfaces;

public interface ISpendingsService
{
  Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto);

  Task UpdateSpendingAsync(UpdateSpendingDto dto);

  Task DeleteSpendingAsync(long id);

  Task<GetSpendingsDto> GetSpendingsAsync();
}