using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Dto.Category;
using Money.BusinessLogic.Exceptions;
using Money.BusinessLogic.Interfaces;
using Money.DataAccess;
using Money.DataAccess.Entities;

namespace Money.BusinessLogic.Services;

/// <summary>
/// Categories service.
/// </summary>
public class CategoriesService : ICategoriesService
{
  private readonly MoneyContext _context;
  private readonly ILogger<CategoriesService> _logger;


  public CategoriesService(MoneyContext context, ILogger<CategoriesService> logger)
  {
    _context = context;
    _logger = logger;
  }

  public async Task<CreateCategoryResultDto> CreateCategoryAsync(CreateCategoryDto dto)
  {
    _logger.LogInformation("Creating new category.");

    var entity = new Category
    {
      Name = dto.Name,
    };

    await _context.Categories.AddAsync(entity);
    await _context.SaveChangesAsync();

    return new()
    {
      Id = entity.Id,
      Name = entity.Name,
    };
  }

  public async Task<GetCategoriesDto> GetCategoriesAsync()
  {
    _logger.LogInformation("Get categories.");

    var entities = await _context.Categories
      .OrderByDescending(spending => spending.Id)
      //.Take(10)
      .AsNoTracking()
      .ToListAsync();

    return new()
    {
      Categories = entities.Select(entity => new GetCategoryDto
      {
        Id = entity.Id,
        Name = entity.Name,
      }).ToList(),
    };
  }

  public async Task UpdateCategoryAsync(UpdateCategoryDto updateCategory)
  {
    _logger.LogInformation($"Update category {updateCategory.Id}");

    var entity = _context.Categories.Where(meas => meas.Id == updateCategory.Id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {updateCategory.Id} not found.");
      throw new NotFoundException(updateCategory.Id);
    }

    entity.Name = updateCategory.Name;

    await _context.SaveChangesAsync();
  }

  public async Task DeleteCategoryAsync(long id)
  {
    _logger.LogInformation($"Delete category {id}");

    var entity = _context.Categories.Where(meas => meas.Id == id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {id} not found.");
      throw new NotFoundException(id);
    }

    _context.Remove(entity);
    await _context.SaveChangesAsync();
  }
}
