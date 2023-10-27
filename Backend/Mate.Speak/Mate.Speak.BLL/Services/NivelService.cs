using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class NivelService : INivelService
    {
        private readonly IGenericRepository<Nivele> _NivelRepo;

        public NivelService(IGenericRepository<Nivele> NivelRepo)
        {
            _NivelRepo = NivelRepo;
        }
        public async Task<bool> Actualizar(Nivele modelo)
        {
            return await _NivelRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _NivelRepo.Eliminar(id);
                 
        }

        public async Task<bool> Insertar(Nivele modelo)
        {
            return await _NivelRepo.Insertar(modelo);
        }

        public async Task<Nivele> Obtener(int id)
        {
            return await _NivelRepo.Obtener(id);
        }

        public async Task<Nivele> Obtenerpornombre(string nombre)
        {
            IQueryable<Nivele> querySQL = await _NivelRepo.ObtenerTodos();
            Nivele Nivel = querySQL.Where(c => c.Nivel == nombre).FirstOrDefault();
            return Nivel;
        }

        public async Task<IQueryable<Nivele>> ObtenerTodos()
        {
           return await _NivelRepo.ObtenerTodos();  
        }
    }
}
