using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class InteresesService : IInteresesService
    {
        private readonly IGenericRepository<Interese> _InteresRepo;

        public InteresesService(IGenericRepository<Interese> InteresRepo)
        {
            _InteresRepo = InteresRepo;
        }
        public async Task<bool> Actualizar(Interese modelo)
        {
            return await _InteresRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _InteresRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Interese modelo)
        {
           return await _InteresRepo.Insertar(modelo);
        }

        public async Task<Interese> Obtener(int id)
        {
           return await _InteresRepo.Obtener(id);
        }

        public async Task<IQueryable<Interese>> ObtenerTodos()
        {
            return await _InteresRepo.ObtenerTodos();
        }

        public async  Task<Interese> ObtenerxNombre(string nombre)
        {
            IQueryable<Interese> querySQL = await _InteresRepo.ObtenerTodos();
            Interese intereses = querySQL.Where(c => c.Intereses == nombre).FirstOrDefault();
            return intereses;
        }
    }
}
