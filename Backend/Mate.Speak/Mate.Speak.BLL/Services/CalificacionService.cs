using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class CalificacionService : ICalificacionService
    {
        private readonly IGenericRepository<Calificacion> _calificacionRepo;

        public CalificacionService(IGenericRepository<Calificacion> calificacionRepo)
        {
            _calificacionRepo = calificacionRepo;
        }

        public async Task<bool> Actualizar(Calificacion modelo)
        {
            return await _calificacionRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _calificacionRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Calificacion modelo)
        {
            return await _calificacionRepo.Insertar(modelo);
        }

        public async Task<Calificacion> Obtener(int id)
        {
            return await _calificacionRepo.Obtener(id);
        }

        public Task<Calificacion> Obtenerpornombre(string nombre)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<Calificacion>> ObtenerTodos()
        {
            return await _calificacionRepo.ObtenerTodos();
        }
    }
}
