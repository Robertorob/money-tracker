﻿namespace Money.DataAccess.Entities;
public class Spending
{
  public long Id { get; set; }

  public double Cost { get; set; }

  public string Comment { get; set; }

  public long? TagId { get; set; }

  public Tag Tag { get; set; }
}
