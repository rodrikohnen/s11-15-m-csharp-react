using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;

namespace Mate.Speak.DAL.Repository
{
    public class EstudioRepository : IGenericRepository<Estudio>
    {
        private readonly mateContext _dbContext;

        public EstudioRepository(mateContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Actualizar(Estudio modelo)
        {
            _dbContext.Estudios.Update(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Estudio modelo = _dbContext.Estudios.First(e => e.IdEstudio == id);
            _dbContext.Estudios.Remove(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Estudio modelo)
        {
            _dbContext.Estudios.Add(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<Estudio> Obtener(int id)
        {
            return await _dbContext.Estudios.FindAsync(id);
        }

        public async Task<IQueryable<Estudio>> ObtenerTodos()
        {
            IQueryable<Estudio> queryEstudioSQL = _dbContext.Estudios;
            return queryEstudioSQL;
        }
    }
}
