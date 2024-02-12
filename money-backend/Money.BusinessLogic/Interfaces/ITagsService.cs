using Money.BusinessLogic.Dto;
using Money.BusinessLogic.Dto.Tag;

namespace Money.BusinessLogic.Interfaces;

public interface ITagsService
{
  Task<CreateTagResultDto> CreateTagAsync(CreateTagDto dto);

  Task UpdateTagAsync(UpdateTagDto dto);

  Task DeleteTagAsync(long id);

  Task<GetTagsDto> GetTagsAsync();
}