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
        private readonly mateContext _dbcontext;

        public EstudioRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> Actualizar(Estudio modelo)
        {
            _dbcontext.Estudios.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Estudio modelo = _dbcontext.Estudios.First(c => c.IdEstudio == id);
            _dbcontext.Estudios.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Estudio modelo)
        {
            _dbcontext.Estudios.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Estudio> Obtener(int id)
        {
            return await _dbcontext.Estudios.FindAsync(id);
        }

        public async Task<IQueryable<Estudio>> ObtenerTodos()
        {
            IQueryable<Estudio> queryEstudiosSQL = _dbcontext.Estudios;
            return queryEstudiosSQL;
        }
    }
}
