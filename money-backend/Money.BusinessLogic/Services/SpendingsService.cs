using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto.Category;
using Money.BusinessLogic.Dto.Spending;
using Money.BusinessLogic.Exceptions;
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

    var category = await _context.Categories.FindAsync(dto.CategoryId);

    var entity = new DataAccess.Entities.Spending
    {
      Cost = dto.Cost,
      Comment = dto.Comment,
      CategoryId = dto.CategoryId,
    };

    await _context.Spendings.AddAsync(entity);
    await _context.SaveChangesAsync();

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

  public async Task<GetSpendingsDto> GetSpendingsAsync()
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

  public async Task UpdateSpendingAsync(UpdateSpendingDto updateSpending)
  {
    _logger.LogInformation($"Update spending {updateSpending.Id}");

    var entity = _context.Spendings.Where(meas => meas.Id == updateSpending.Id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {updateSpending.Id} not found.");
      throw new NotFoundException(updateSpending.Id);
    }

    entity.Cost = updateSpending.Cost;
    entity.Comment = updateSpending.Comment;
    entity.CategoryId = updateSpending.CategoryId;

    await _context.SaveChangesAsync();
  }

  public async Task DeleteSpendingAsync(long id)
  {
    _logger.LogInformation($"Delete spending {id}");

    var entity = _context.Spendings.Where(meas => meas.Id == id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {id} not found.");
      throw new NotFoundException(id);
    }

    _context.Remove(entity);
    await _context.SaveChangesAsync();
  }
}
