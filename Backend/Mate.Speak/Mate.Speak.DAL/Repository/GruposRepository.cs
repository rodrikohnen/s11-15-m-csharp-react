using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    internal class GruposRepository : IGenericRepository<Grupo>
    {
        private readonly mateContext _dbcontext;

        public GruposRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public Task<bool> Actualizar(Grupo modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Grupo modelo)
        {
            throw new NotImplementedException();
        }

        public Task<Grupo> Obtener(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Grupo>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
