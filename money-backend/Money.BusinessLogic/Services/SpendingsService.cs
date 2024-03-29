﻿using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Money.BusinessLogic.Dto.Tag;
using Money.BusinessLogic.Dto.Spending;
using Money.BusinessLogic.Exceptions;
using Money.BusinessLogic.Interfaces;
using Money.DataAccess;
using Money.DataAccess.Entities;

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

    IQueryable<Tag>? tags = null;
    if (dto.TagIds is not null && dto.TagIds.Any())
    {
      tags = _context.Tags.Where(tag => dto.TagIds.Contains(tag.Id));
    }

    var entity = new Spending
    {
      Cost = dto.Cost,
      Comment = dto.Comment,
      Tags = tags?.ToList(),
    };

    await _context.Spendings.AddAsync(entity);
    await _context.SaveChangesAsync();

    return new()
    {
      Id = entity.Id,
      Tags = entity.Tags?.Select(tag => new TagDto { Id = tag.Id, Name = tag.Name }),
      Comment = entity.Comment,
      Cost = entity.Cost,
    };
  }

  public async Task<GetSpendingsDto> GetSpendingsAsync()
  {
    _logger.LogInformation("Get spendings.");

    var entities = await _context.Spendings
      .OrderByDescending(spending => spending.Id)
      .Include(spending => spending.Tags)
      .Take(10)
      .AsNoTracking()
      .ToListAsync();

    return new()
    {
      Spendings = entities.Select(entity => new GetSpendingDto
      {
        Id = entity.Id,
        Cost = entity.Cost,
        Comment = entity.Comment,
        Tags = entity.Tags?.Select(tag => new TagDto { Id = tag.Id, Name = tag.Name }),
      }),
    };
  }

  public async Task UpdateSpendingAsync(UpdateSpendingDto updateSpending)
  {
    _logger.LogInformation($"Update spending {updateSpending.Id}");

    var entity = _context.Spendings.Include(spending => spending.Tags).Where(meas => meas.Id == updateSpending.Id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {updateSpending.Id} not found.");
      throw new NotFoundException(updateSpending.Id);
    }

    entity.Cost = updateSpending.Cost;
    entity.Comment = updateSpending.Comment;

    IQueryable<Tag>? tags = null;
    if (updateSpending.TagIds is not null && updateSpending.TagIds.Any())
    {
      tags = _context.Tags.Where(tag => updateSpending.TagIds.Contains(tag.Id));
    }

    var oldTags = entity.Tags?.ToList();

    if (oldTags is not null)
    {
      foreach (var tag in oldTags)
      {
        entity.Tags!.Remove(tag);
      }
    }

    entity.Tags = tags?.ToList();

    await _context.SaveChangesAsync();
  }

  public async Task DeleteSpendingAsync(long id)
  {
    _logger.LogInformation($"Delete spending {id}");

    var entity = _context.Spendings.Where(meas => meas.Id == id).SingleOrDefault();

    if (entity is null)
    {
      _logger.LogError($"Entity with id {id} not found.");
      throw new NotFoundException(id);
    }

    _context.Remove(entity);
    await _context.SaveChangesAsync();
  }
}
