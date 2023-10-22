using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class PaisRepository : IGenericRepository<Pai>
    {
        private readonly mateContext _dbcontext;

        public PaisRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<bool> Actualizar(Pai modelo)
        {
            _dbcontext.Pais.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Pai modelo = _dbcontext.Pais.First(c => c.IdPais == id);
            _dbcontext.Pais.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Pai modelo)
        {
            _dbcontext.Pais.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Pai> Obtener(int id)
        {
            return await _dbcontext.Pais.FindAsync(id);
        }

        public async Task<IQueryable<Pai>> ObtenerTodos()
        {
            IQueryable<Pai> queryPaisSQL = _dbcontext.Pais;
            return queryPaisSQL;
        }
    }
}
