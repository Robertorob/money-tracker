using Microsoft.EntityFrameworkCore;
using Money.BusinessLogic.Interfaces;
using Money.BusinessLogic.Services;
using Money.DataAccess;
using Money.Migrator;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration
  .AddJsonFile("appsettings.json", optional: false)
  .AddJsonFile("appsettings.override.json", optional: true);

string contextName = "Money";
MigrationHelper.Run(contextName);

builder.Services
  .AddDbContext<MoneyContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString(contextName)));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
  .AddTransient<ISpendingsService, SpendingsService>()
  .AddTransient<ICategoriesService, CategoriesService>();

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAny",
    policy =>
    {
      policy.AllowAnyOrigin().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

// app.UseAuthorization();
app.UseCors("AllowAny");
app.MapControllers();

app.Run();
