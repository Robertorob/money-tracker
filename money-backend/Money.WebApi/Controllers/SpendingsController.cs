using Microsoft.AspNetCore.Mvc;
using Money.BusinessLogic.Dto.Category;
using Money.BusinessLogic.Dto.Spending;
using Money.BusinessLogic.Interfaces;

namespace Money.WebApi.Controllers;
[ApiController]
[Route("spendings")]
public class SpendingsController : ControllerBase
{
  private readonly ILogger<SpendingsController> _logger;
  private readonly ISpendingsService _spendingService;

  public SpendingsController(ILogger<SpendingsController> logger, ISpendingsService spendingService)
  {
    _logger = logger;
    _spendingService = spendingService;
  }

  [HttpGet]
  [Route("isAlive")]
  public string IsAlive()
  {
    return "Alive";
  }

  [HttpPost]
  [Route("create")]
  public async Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto)
  {
    return await _spendingService.CreateSpendingAsync(dto);
  }

  [HttpPost]
  [Route("update")]
  public async Task UpdateSpendingAsync(UpdateSpendingDto dto)
  {
    await _spendingService.UpdateSpendingAsync(dto);
  }

  [HttpPost]
  [Route("delete/{id}")]
  public async Task DeleteSpendingAsync(long id)
  {
    await _spendingService.DeleteSpendingAsync(id);
  }

  [HttpGet]
  [Route("list")]
  public async Task<GetSpendingsDto> GetSpendingAsync()
  {
    return await _spendingService.GetSpendingsAsync();
  }
}
