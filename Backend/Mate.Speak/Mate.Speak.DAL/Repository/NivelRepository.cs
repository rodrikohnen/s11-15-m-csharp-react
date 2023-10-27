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
    public class NivelRepository : IGenericRepository<Nivele>
    {
        private readonly mateContext _dbcontext;

        public NivelRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<bool> Actualizar(Nivele modelo)
        {
            _dbcontext.Niveles.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Nivele modelo = _dbcontext.Niveles.First(c => c.IdNivel == id);
            _dbcontext.Niveles.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Nivele modelo)
        {
            _dbcontext.Niveles.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Nivele> Obtener(int id)
        {
            return await _dbcontext.Niveles.FindAsync(id);
        }

        public async Task<IQueryable<Nivele>> ObtenerTodos()
        {
            IQueryable<Nivele> QueryNivelSql = _dbcontext.Niveles;
            return QueryNivelSql;
        }
    }
}
