using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;

namespace Mate.Speak.DAL.Repository
{
    public class AdminSalaRepository : IGenericRepository<AdminSala>
    {
        private readonly mateContext _dbContext;

        public AdminSalaRepository(mateContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Actualizar(AdminSala modelo)
        {
            _dbContext.AdminSalas.Update(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            AdminSala modelo = _dbContext.AdminSalas.First(a => a.IdAdmin == id);
            _dbContext.AdminSalas.Remove(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(AdminSala modelo)
        {
            _dbContext.AdminSalas.Add(modelo);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<AdminSala> Obtener(int id)
        {
            return await _dbContext.AdminSalas.FindAsync(id);
        }

        public async Task<IQueryable<AdminSala>> ObtenerTodos()
        {
            IQueryable<AdminSala> queryAdminSalaSQL = _dbContext.AdminSalas;
            return queryAdminSalaSQL;
        }
    }
}
