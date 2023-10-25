using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class SalaService : ISalaService
    {
        private readonly IGenericRepository<Sala> _salaRepo;

        public SalaService(IGenericRepository<Sala> salaRepo)
        {
            _salaRepo = salaRepo;
        }

        public async Task<bool> Actualizar(Sala modelo)
        {
            return await _salaRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _salaRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Sala modelo)
        {
            return await _salaRepo.Insertar(modelo);
        }

        public async Task<Sala> Obtener(int id)
        {
            return await _salaRepo.Obtener(id);
        }

        public async Task<IQueryable<Sala>> ObtenerTodos()
        {
            return await _salaRepo.ObtenerTodos();
        }

    }
}
