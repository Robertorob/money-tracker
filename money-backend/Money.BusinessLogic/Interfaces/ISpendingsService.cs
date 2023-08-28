using Money.BusinessLogic.Dto;
namespace Money.BusinessLogic.Interfaces;

public interface ISpendingsService
{
  Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto);

  Task UpdateSpendingAsync();

  Task<GetSpendingsDto> GetSpendingAsync();

  Task<GetCategoriesDto> GetCategoriesAsync();
}