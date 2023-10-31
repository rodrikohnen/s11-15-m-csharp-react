using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class Categoria_SalaRepository : IGenericRepository<CategoriaSala>
    {
        private readonly mateContext _dbcontext;

        public Categoria_SalaRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> Actualizar(CategoriaSala modelo)
        {
           _dbcontext.CategoriaSalas.Update(modelo); 
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            CategoriaSala modelo = _dbcontext.CategoriaSalas.First(c => c.IdCategoriasala == id);
            _dbcontext.CategoriaSalas.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(CategoriaSala modelo)
        {
           _dbcontext.CategoriaSalas.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<CategoriaSala> Obtener(int id)
        {
            return await _dbcontext.CategoriaSalas.FindAsync(id);
        }

        public async Task<IQueryable<CategoriaSala>> ObtenerTodos()
        {
            IQueryable<CategoriaSala> queryCategoriaSalaSQL = _dbcontext.CategoriaSalas;
            return queryCategoriaSalaSQL;
        }
    }
}
