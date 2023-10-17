using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;

namespace Mate.Speak.DAL.Repository
{
    public class GrupoRepository : IGenericRepository<Grupo>
    {
        private readonly mateContext _dbcontext;

        public GrupoRepository(mateContext dbcontext)
        {
            _dbcontext= dbcontext;
        }
        public async Task<bool> Actualizar(Grupo modelo)
        {
            _dbcontext.Grupos.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Grupo modelo = _dbcontext.Grupos.First(c => c.IdGrupo == id);
            _dbcontext.Grupos.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Grupo modelo)
        {
            _dbcontext.Grupos.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Grupo> Obtener(int id)
        {
            return await _dbcontext.Grupos.FindAsync(id);
        }

        public async Task<IQueryable<Grupo>> ObtenerTodos()
        {
            IQueryable<Grupo> queryGrupoSQL = _dbcontext.Grupos;
            return queryGrupoSQL;
        }
    }
}
