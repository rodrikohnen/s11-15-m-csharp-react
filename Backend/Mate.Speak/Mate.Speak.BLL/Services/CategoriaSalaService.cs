using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class CategoriaSalaService : GenericService<CategoriaSala>, ICategoriaSalaService
    {
        public CategoriaSalaService(ICategoriaSalaRepository repository) : base(repository)
        {
        }
    }
}