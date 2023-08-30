using Money.BusinessLogic.Dto;
namespace Money.BusinessLogic.Interfaces;

public interface ISpendingsService
{
  Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto);

  Task UpdateSpendingAsync(UpdateSpendingDto dto);

  Task DeleteSpendingAsync(long id);

  Task<GetSpendingsDto> GetSpendingAsync();

  Task<GetCategoriesDto> GetCategoriesAsync();
}