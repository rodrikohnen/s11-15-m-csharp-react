using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    internal class CalificacionRepository : IGenericRepository<Calificacion>
    {
        private readonly mateContext _dbcontext;

        public CalificacionRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<bool> Actualizar(Calificacion modelo)
        {
            _dbcontext.Calificacions.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;

        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Calificacion modelo)
        {
            throw new NotImplementedException();
        }

        public Task<Calificacion> Obtener(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Calificacion>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
