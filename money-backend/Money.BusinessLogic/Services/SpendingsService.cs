using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Interfaces;
using Money.DataAccess;

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
      CategoryId = entity.CategoryId,
      Comment = entity.Comment,
      Cost = entity.Cost,
    };
  }

  public async Task<GetSpendingsDto> GetSpendingAsync()
  {
    _logger.LogInformation("Get spendings.");

    var spendings = await _context.Spendings.Include(spending => spending.Category).Take(10).AsNoTracking().ToListAsync();

    return new()
    {
      Spendings = spendings.Select(spending => new GetSpendingDto
      {
        Id = spending.Id,
        Cost = spending.Cost,
        Comment = spending.Comment,
        Category = spending.CategoryId is null ? null :
        new()
        {
          Id = spending.CategoryId.Value,
          Name = spending.Category.Name
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
