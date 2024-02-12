using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Dto.Tag;
using Money.BusinessLogic.Exceptions;
using Money.BusinessLogic.Interfaces;
using Money.DataAccess;
using Money.DataAccess.Entities;

namespace Money.BusinessLogic.Services;

/// <summary>
/// Tags service.
/// </summary>
public class TagsService : ITagsService
{
  private readonly MoneyContext _context;
  private readonly ILogger<TagsService> _logger;


  public TagsService(MoneyContext context, ILogger<TagsService> logger)
  {
    _context = context;
    _logger = logger;
  }

  public async Task<CreateTagResultDto> CreateTagAsync(CreateTagDto dto)
  {
    _logger.LogInformation("Creating new tag.");

    var entity = new Tag
    {
      Name = dto.Name,
    };

    await _context.Tags.AddAsync(entity);
    await _context.SaveChangesAsync();

    return new()
    {
      Id = entity.Id,
      Name = entity.Name,
    };
  }

  public async Task<GetTagsDto> GetTagsAsync()
  {
    _logger.LogInformation("Get tags.");

    var entities = await _context.Tags
      .OrderByDescending(spending => spending.Id)
      //.Take(10)
      .AsNoTracking()
      .ToListAsync();

    return new()
    {
      Tags = entities.Select(entity => new GetTagDto
      {
        Id = entity.Id,
        Name = entity.Name,
      }).ToList(),
    };
  }

  public async Task UpdateTagAsync(UpdateTagDto updateTag)
  {
    _logger.LogInformation($"Update tag {updateTag.Id}");

    var entity = _context.Tags.Where(meas => meas.Id == updateTag.Id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {updateTag.Id} not found.");
      throw new NotFoundException(updateTag.Id);
    }

    entity.Name = updateTag.Name;

    await _context.SaveChangesAsync();
  }

  public async Task DeleteTagAsync(long id)
  {
    _logger.LogInformation($"Delete tag {id}");

    var entity = _context.Tags.Where(meas => meas.Id == id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {id} not found.");
      throw new NotFoundException(id);
    }

    _context.Remove(entity);
    await _context.SaveChangesAsync();
  }
}
