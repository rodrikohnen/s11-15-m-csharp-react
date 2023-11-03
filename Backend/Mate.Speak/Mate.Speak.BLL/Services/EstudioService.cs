using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class EstudioService : IEstudioService
    {
        private readonly IGenericRepository<Estudio> _estudioRepo;

        public EstudioService(IGenericRepository<Estudio> estudioRepo)
        {
            _estudioRepo = estudioRepo;
        }

        public async Task<bool> Actualizar(Estudio modelo)
        {
            return await _estudioRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _estudioRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Estudio modelo)
        {
            return await _estudioRepo.Insertar(modelo);
        }

        public async Task<Estudio> Obtener(int id)
        {
            return await _estudioRepo.Obtener(id);
        }

        public async Task<IQueryable<Estudio>> ObtenerTodos()
        {
            return await _estudioRepo.ObtenerTodos();
        }
    }
}
