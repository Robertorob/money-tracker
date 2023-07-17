using DbUp;
using DbUp.Helpers;
using Microsoft.Extensions.Configuration;

namespace Money.Migrator
{
  public static class MigrationHelper
  {
    internal static void ShowSuccess()
    {
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WriteLine("Success!");
      Console.ResetColor();
    }

    internal static int ReturnError(string error)
    {
      Console.ForegroundColor = ConsoleColor.Red;
      Console.WriteLine(error);
      Console.ResetColor();
      return -1;
    }

    internal static void PerformUpgrade(string connectionString, string scriptsFolder, bool logToJournal)
    {
      var upgrader = DeployChanges.To
        .PostgresqlDatabase(connectionString)
        .WithScriptsFromFileSystem(scriptsFolder)
        .LogToConsole();

      if (!logToJournal)
      {
        upgrader = upgrader.JournalTo(new NullJournal());
      }

      var result = upgrader.Build().PerformUpgrade();

      if (!result.Successful)
      {
        ReturnError(result.Error.ToString());
      }
    }

    /// <summary>
    /// Runs migrations.
    /// </summary>
    public static void Run(string contextName)
    {
      var config = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false)
        .AddJsonFile("appsettings.override.json", optional: true)
        .Build();

      string? connectionString = config.GetConnectionString(contextName);

      if (connectionString is null || string.IsNullOrWhiteSpace(connectionString))
      {
        throw new Exception("No connection string for migrator.");
      }

      EnsureDatabase.For.PostgresqlDatabase(connectionString);

      PerformUpgrade(connectionString, "Migrations", true);

      ShowSuccess();
    }
  }
}
