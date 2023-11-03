using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class DatosService : IDatosService
    {
        private readonly IGenericRepository<Dato> _DatosRepo;

        public DatosService(IGenericRepository<Dato> DatosRepo)
        {
            _DatosRepo = DatosRepo;
        }

        public async Task<bool> Actualizar(Dato modelo)
        {
            return await _DatosRepo.Actualizar(modelo); 
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _DatosRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Dato modelo)
        {
           return await _DatosRepo.Insertar(modelo);
        }

        public async Task<Dato> Obtener(int id)
        {
            return await _DatosRepo.Obtener(id); 
        }

       

        public Task<Dato> ObtenerContacto()
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<Dato>> ObtenerTodos()
        {
           return await _DatosRepo.ObtenerTodos();
        }

        public Task<Dato> Obtenerxnombre(string nombre)
        {
            throw new NotImplementedException();
        }
    }
}
