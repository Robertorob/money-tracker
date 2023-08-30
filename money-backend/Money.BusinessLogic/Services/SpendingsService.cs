using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Interfaces;
using Money.DataAccess;
using Money.DataAccess.Entities;

namespace Money.BusinessLogic.Services;

/// <summary>
/// Spendings service.
/// </summary>
public class SpendingsService : ISpendingsService
{
  private readonly MoneyContext _context;
  private readonly ILogger<SpendingsService> _logger;


  public SpendingsService(MoneyContext context, ILogger<SpendingsService> logger)
  {
    _context = context;
    _logger = logger;
  }

  public async Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto)
  {
    _logger.LogInformation("Creating new spending.");

    var categoryTask = _context.Categories.FindAsync(dto.CategoryId);

    var entity = new DataAccess.Entities.Spending
    {
      Cost = dto.Cost,
      Comment = dto.Comment,
      CategoryId = dto.CategoryId,
    };

    await _context.Spendings.AddAsync(entity);
    await _context.SaveChangesAsync();

    var category = await categoryTask;
    return new()
    {
      Id = entity.Id,
      Category = dto.CategoryId is null ? null : new()
      {
        Id = category.Id,
        Name = category.Name,
      },
      Comment = entity.Comment,
      Cost = entity.Cost,
    };
  }

  public async Task<GetCategoriesDto> GetCategoriesAsync()
  {
    _logger.LogInformation("Get categories.");

    var entities = await _context.Categories.AsNoTracking().ToListAsync();

    return new()
    {
      Categories = entities.Select(entity => new GetCategoryDto
      {
        Id = entity.Id,
        Name = entity.Name,
      }).ToList(),
    };
  }

  public async Task<GetSpendingsDto> GetSpendingAsync()
  {
    _logger.LogInformation("Get spendings.");

    var entities = await _context.Spendings
      .OrderByDescending(spending =>  spending.Id)
      .Include(spending => spending.Category)
      .Take(10)
      .AsNoTracking()
      .ToListAsync();

    return new()
    {
      Spendings = entities.Select(entity => new GetSpendingDto
      {
        Id = entity.Id,
        Cost = entity.Cost,
        Comment = entity.Comment,
        Category = entity.CategoryId is null ? null :
        new()
        {
          Id = entity.CategoryId.Value,
          Name = entity.Category.Name
        }
      }).ToList(),
    };
  }

  public async Task UpdateSpendingAsync()
  {
    _logger.LogInformation("Updating spending");

    long spendingId = 0;
    var entity = _context.Spendings.Where(meas => meas.Id == spendingId).SingleOrDefault();

    if (entity is null)
    {
      throw new Exception();
    }
    entity.Comment = "updated comment";

    await _context.SaveChangesAsync();
  }
}
