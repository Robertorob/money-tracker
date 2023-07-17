using Microsoft.AspNetCore.Mvc;

namespace Money.WebApi.Controllers;
[ApiController]
[Route("[controller]")]
public class SpendingsController : ControllerBase
{
  private readonly ILogger<SpendingsController> _logger;

  public SpendingsController(ILogger<SpendingsController> logger)
  {
    _logger = logger;
  }

  [HttpGet(Name = "GetSpendings")]
  public string Get()
  {
    return "empty";
  }
}
