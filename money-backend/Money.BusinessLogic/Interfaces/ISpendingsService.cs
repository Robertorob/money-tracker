using Money.BusinessLogic.Dto;
namespace Money.BusinessLogic.Interfaces;

public interface ISpendingsService
{
  Task CreateSpendingAsync(CreateSpendingDto dto);

  Task UpdateSpendingAsync();

  Task<GetSpendingsDto> GetSpendingAsync();
}