using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Dto.Category;

namespace Money.BusinessLogic.Interfaces;

public interface ICategoriesService
{
  Task<CreateCategoryResultDto> CreateCategoryAsync(CreateCategoryDto dto);

  Task UpdateCategoryAsync(UpdateCategoryDto dto);

  Task DeleteCategoryAsync(long id);

  Task<GetCategoriesDto> GetCategoriesAsync();
}