using Mate.Speak.Models;
using Mate.Speak.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;

namespace Mate.Speak.BLL.Services
{
    public class RolService : IRolService
    {
        private readonly IGenericRepository<Role> _RolRepo;

        public RolService(IGenericRepository<Role> RolRepo)
        {
            _RolRepo = RolRepo;
        }
        public async Task<bool> Actualizar(Role modelo)
        {
            return await _RolRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _RolRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Role modelo)
        {
            return await _RolRepo.Insertar(modelo);                 
        }

        public async Task<Role> Obtener(int id)
        {
            return await _RolRepo.Obtener(id);
        }

        public async Task<Role> Obtenerpornombre(string nombre)
        {
            IQueryable<Role> querySQL = await _RolRepo.ObtenerTodos();
            Role roles = querySQL.Where(c => c.Roles == nombre).FirstOrDefault();
            return roles;
        }

        public async Task<IQueryable<Role>> ObtenerTodos()
        {
            return await _RolRepo.ObtenerTodos();
        }
    }
}
