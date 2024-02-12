using Microsoft.AspNetCore.Mvc;
using Money.BusinessLogic.Dto.Tag;
using Money.BusinessLogic.Interfaces;

namespace Money.WebApi.Controllers;
[ApiController]
[Route("tags")]
public class TagsController : ControllerBase
{
  private readonly ILogger<TagsController> _logger;
  private readonly ITagsService _tagService;

  public TagsController(ILogger<TagsController> logger, ITagsService tagService)
  {
    _logger = logger;
    _tagService = tagService;
  }

  [HttpPost]
  [Route("create")]
  public async Task<CreateTagResultDto> CreateTagAsync(CreateTagDto dto)
  {
    return await _tagService.CreateTagAsync(dto);
  }

  [HttpPost]
  [Route("update")]
  public async Task UpdateTagAsync(UpdateTagDto dto)
  {
    await _tagService.UpdateTagAsync(dto);
  }

  [HttpPost]
  [Route("delete/{id}")]
  public async Task DeleteTagAsync(long id)
  {
    await _tagService.DeleteTagAsync(id);
  }

  [HttpGet]
  [Route("list")]
  public async Task<GetTagsDto> GetTagsAsync()
  {
    return await _tagService.GetTagsAsync();
  }
}
