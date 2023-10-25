using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;

namespace Mate.Speak.DAL.Repository
{
    public class SalaRepository : IGenericRepository<Sala>
    {
        private readonly mateContext _dbContext;

        public SalaRepository(mateContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Actualizar(Sala modelo)
        {
            _dbContext.Salas.Update(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Sala modelo = _dbContext.Salas.First(s => s.IdSala == id);
            _dbContext.Salas.Remove(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Sala modelo)
        {
            _dbContext.Salas.Add(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<Sala> Obtener(int id)
        {
            return await _dbContext.Salas.FindAsync(id);
        }

        public async Task<IQueryable<Sala>> ObtenerTodos()
        {
            IQueryable<Sala> querySalaSQL = _dbContext.Salas;
            return querySalaSQL;
        }
    }
}
