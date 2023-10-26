using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.DAL.Repository
{
    public class CategoriaSalaRepository : GenericRepository<CategoriaSala>, ICategoriaSalaRepository
    {
        public CategoriaSalaRepository(mateContext context) : base(context)
        {
        }
    }
}
