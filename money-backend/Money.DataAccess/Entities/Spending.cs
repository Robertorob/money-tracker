﻿namespace Money.DataAccess.Entities;
public class Spending
{
  public long Id { get; set; }

  public double Cost { get; set; }

  public string Comment { get; set; } = string.Empty;

  public ICollection<Tag>? Tags { get; set; }
}
