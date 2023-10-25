using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class AdminSalaService : IAdminSalaService
    {
        private readonly IGenericRepository<AdminSala> _adminSalaRepo;

        public AdminSalaService(IGenericRepository<AdminSala> adminSalaRepo)
        {
            _adminSalaRepo = adminSalaRepo;
        }

        public async Task<bool> Actualizar(AdminSala modelo)
        {
            return await _adminSalaRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _adminSalaRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(AdminSala modelo)
        {
            return await _adminSalaRepo.Insertar(modelo);
        }

        public async Task<AdminSala> Obtener(int id)
        {
            return await _adminSalaRepo.Obtener(id);
        }

        public async Task<IQueryable<AdminSala>> ObtenerTodos()
        {
            return await _adminSalaRepo.ObtenerTodos();
        }

    }
}
