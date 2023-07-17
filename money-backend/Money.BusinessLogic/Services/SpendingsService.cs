using Microsoft.Extensions.Logging;
using Money.DataAccess;

namespace Money.BusinessLogic.Services;

/// <summary>
/// Сервис калибровки.
/// </summary>
public class SpendingsService // : ISpendingService
{
  private readonly MoneyContext _context;
  private readonly ILogger<SpendingsService> _logger;


  public SpendingsService(MoneyContext context, ILogger<SpendingsService> logger)
  {
    _context = context;
    _logger = logger;
  }

  public async Task CreateSpendingAsync()
  {
    _logger.LogInformation("Creating new spending.");

    var entity = new DataAccess.Entities.Spending
    {
        
    };

    await _context.Spendings.AddAsync(entity);
    await _context.SaveChangesAsync();
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
