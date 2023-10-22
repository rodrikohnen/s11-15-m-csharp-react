using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class InteresesRepository : IGenericRepository<Interese>
    {
        private readonly mateContext _dbcontext;

        public InteresesRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<bool> Actualizar(Interese modelo)
        {
            _dbcontext.Intereses.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Interese modelo = _dbcontext.Intereses.First(c => c.IdInteres == id);
            _dbcontext.Intereses.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Interese modelo)
        {
            _dbcontext.Intereses.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Interese> Obtener(int id)
        {
            return await _dbcontext.Intereses.FindAsync(id);
        }

        public async Task<IQueryable<Interese>> ObtenerTodos()
        {
            IQueryable<Interese> queryInteresSQL = _dbcontext.Intereses;
            return queryInteresSQL;
        }
    }
}
