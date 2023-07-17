using Microsoft.EntityFrameworkCore;
using Money.DataAccess;
using Money.Migrator;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration
  .AddJsonFile("appsettings.json", optional: false)
  .AddJsonFile("appsettings.override.json", optional: true);

MigrationHelper.Run();

builder.Services
  .AddDbContext<MoneyContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("money-db")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.addcontez

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
