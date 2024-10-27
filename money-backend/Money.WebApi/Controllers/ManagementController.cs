using Microsoft.AspNetCore.Mvc;
using Money.BusinessLogic.Interfaces;

namespace Money.WebApi.Controllers;
[ApiController]
public class ManagementController : ControllerBase
{
    private readonly ILogger<SpendingsController> _logger;
    private readonly ISpendingsService _spendingService;

    public ManagementController(ILogger<SpendingsController> logger, ISpendingsService spendingService)
    {
        _logger = logger;
        _spendingService = spendingService;
    }

    [HttpGet]
    [Route("ping")]
    public string IsAlive()
    {
        return "pong";
    }
}
