using Microsoft.AspNetCore.Mvc;

namespace Money.WebApi.Controllers;
[ApiController]
public class ManagementController : ControllerBase
{
    [HttpGet]
    [Route("ping")]
    public string IsAlive()
    {
        return "pong";
    }
}
