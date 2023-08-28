using Microsoft.AspNetCore.Mvc;
using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Interfaces;

namespace Money.WebApi.Controllers;
[ApiController]
[Route("[controller]")]
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
  [Route("/isAlive")]
  public string IsAlive()
  {
    return "Alive";
  }

  [HttpPost]
  [Route("/createSpending")]
  public async Task<string> CreateSpendingAsync(CreateSpendingDto dto)
  {
    await _spendingService.CreateSpendingAsync(dto);
    return "Ok";
  }

  [HttpPost]
  [Route("/getSpendings")]
  public async Task<GetSpendingsDto> CreateSpendingAsync()
  {
    return await _spendingService.GetSpendingAsync();
  }
}
