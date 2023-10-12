using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

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

        public async Task<IQueryable<Dato>> ObtenerTodos()
        {
            return await _DatosRepo.ObtenerTodos();
        }

        public Task<Dato> ObtenerxApellido(string apellido)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> ObtenerxGrupo(int grupo)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> ObtenerxIdioma(int idEstudio)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> ObtenerxIntereses(string interes)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> Obtenerxnombre(string nombre)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> ObtenerxPais(string pais)
        {
            throw new NotImplementedException();
        }
    }
}
