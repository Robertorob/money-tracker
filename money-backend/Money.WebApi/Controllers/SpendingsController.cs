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
  public async Task<CreateSpendingResultDto> CreateSpendingAsync(CreateSpendingDto dto)
  {
    return await _spendingService.CreateSpendingAsync(dto);
  }

  [HttpPost]
  [Route("/updateSpending")]
  public async Task UpdateSpendingAsync(UpdateSpendingDto dto)
  {
    await _spendingService.UpdateSpendingAsync(dto);
  }

  [HttpPost]
  [Route("/deleteSpending/{id}")]
  public async Task DeleteSpendingAsync(long id)
  {
    await _spendingService.DeleteSpendingAsync(id);
  }

  [HttpGet]
  [Route("/getSpendings")]
  public async Task<GetSpendingsDto> GetSpendingAsync()
  {
    return await _spendingService.GetSpendingAsync();
  }

  [HttpGet]
  [Route("/getCategories")]
  public async Task<GetCategoriesDto> GetCategoriesAsync()
  {
    return await _spendingService.GetCategoriesAsync();
  }
}
