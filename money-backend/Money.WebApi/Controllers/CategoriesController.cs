using Microsoft.AspNetCore.Mvc;
using Money.BusinessLogic.Dto.Category;
using Money.BusinessLogic.Interfaces;

namespace Money.WebApi.Controllers;
[ApiController]
[Route("categories")]
public class CategoriesController : ControllerBase
{
  private readonly ILogger<CategoriesController> _logger;
  private readonly ICategoriesService _categoryService;

  public CategoriesController(ILogger<CategoriesController> logger, ICategoriesService categoryService)
  {
    _logger = logger;
    _categoryService = categoryService;
  }

  [HttpPost]
  [Route("create")]
  public async Task<CreateCategoryResultDto> CreateCategoryAsync(CreateCategoryDto dto)
  {
    return await _categoryService.CreateCategoryAsync(dto);
  }

  [HttpPost]
  [Route("update")]
  public async Task UpdateCategoryAsync(UpdateCategoryDto dto)
  {
    await _categoryService.UpdateCategoryAsync(dto);
  }

  [HttpPost]
  [Route("delete/{id}")]
  public async Task DeleteCategoryAsync(long id)
  {
    await _categoryService.DeleteCategoryAsync(id);
  }

  [HttpGet]
  [Route("list")]
  public async Task<GetCategoriesDto> GetCategoriesAsync()
  {
    return await _categoryService.GetCategoriesAsync();
  }
}
