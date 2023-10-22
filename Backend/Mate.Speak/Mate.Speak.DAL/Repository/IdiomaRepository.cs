using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class IdiomaRepository : IGenericRepository<Idioma>
    {
        private readonly mateContext _dbcontext;

        public IdiomaRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> Actualizar(Idioma modelo)
        {
            _dbcontext.Idiomas.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Idioma modelo = _dbcontext.Idiomas.First(c => c.IdIdioma == id);
            _dbcontext.Idiomas.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Idioma modelo)
        {
            _dbcontext.Idiomas.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Idioma> Obtener(int id)
        {
            return await _dbcontext.Idiomas.FindAsync(id);
        }

        public async Task<IQueryable<Idioma>> ObtenerTodos()
        {
            IQueryable<Idioma> queryIdiomaSQL = _dbcontext.Idiomas;
            return queryIdiomaSQL;
        }
    }
}
