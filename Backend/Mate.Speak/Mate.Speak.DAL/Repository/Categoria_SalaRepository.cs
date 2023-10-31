using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    internal class Categoria_SalaRepository : IGenericRepository<CategoriaSala>
    {
        private readonly mateContext _dbcontext;

        public Categoria_SalaRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public Task<bool> Actualizar(CategoriaSala modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(CategoriaSala modelo)
        {
            throw new NotImplementedException();
        }

        public Task<CategoriaSala> Obtener(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<CategoriaSala>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
