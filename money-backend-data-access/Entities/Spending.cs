namespace money_backend_data_access.Entities;
public class Spending
{
    public Guid Id { get; set; }

    public long Cost { get; set; }

    public string Comment { get; set; }

    public Category Category { get; set; }
}
