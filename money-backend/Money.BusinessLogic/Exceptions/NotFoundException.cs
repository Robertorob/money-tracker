namespace Money.BusinessLogic.Exceptions;

public class NotFoundException : Exception
{
  public NotFoundException(long id) : base($"Entity with id {id} not found.")
  {
  }
}
