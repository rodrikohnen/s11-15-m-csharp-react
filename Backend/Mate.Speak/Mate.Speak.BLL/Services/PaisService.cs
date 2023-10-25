using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class PaisService : IPaisService
    {
        private readonly IGenericRepository<Pai> _paisRepo;

        public PaisService(IGenericRepository<Pai> paisRepo)
        {
            _paisRepo = paisRepo;   
        }

        public async Task<bool> Actualizar(Pai modelo)
        {
            return await _paisRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
           return await _paisRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Pai modelo)
        {
           return await _paisRepo.Insertar(modelo);
        }

        public async Task<Pai> Obtener(int id)
        {
            return await _paisRepo.Obtener(id);
        }

        public async Task<Pai> Obtener(string nombre)
        {
            IQueryable<Pai> querySQL = await _paisRepo.ObtenerTodos();
            Pai Pais = querySQL.Where(c => c.Pais == nombre).FirstOrDefault();
            return Pais;
        }

        public async Task<IQueryable<Pai>> ObtenerTodos()
        {
            return await _paisRepo.ObtenerTodos();
        }

        public async Task<Pai> Obtenerxcodigopais(string codigo)
        {
            IQueryable<Pai> querySQL = await _paisRepo.ObtenerTodos();
            Pai Pais = querySQL.Where(c => c.CodigoPais == codigo).FirstOrDefault();
            return Pais;
        }
    }
}
