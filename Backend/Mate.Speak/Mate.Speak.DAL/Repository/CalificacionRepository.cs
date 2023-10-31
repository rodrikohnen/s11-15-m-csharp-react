using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class CalificacionRepository : IGenericRepository<Calificacion>
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

        public async Task<bool> Eliminar(int id)
        {
            Calificacion modelo = _dbcontext.Calificacions.First(c => c.IdCalificacion == id);
            _dbcontext.Calificacions.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Calificacion modelo)
        {
            _dbcontext.Calificacions.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;

        }

        public async Task<Calificacion> Obtener(int id)
        {
            return await _dbcontext.Calificacions.FindAsync(id);
        }

        public async Task<IQueryable<Calificacion>> ObtenerTodos()
        {
            IQueryable<Calificacion> queryCalificacionSQL = _dbcontext.Calificacions;
            return queryCalificacionSQL;
        }
    }
}
