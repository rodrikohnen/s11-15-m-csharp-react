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

        private readonly IGenericRepository<Usuario> _UsuarioRepo;

        public DatosService(IGenericRepository<Dato> DatosRepo, IGenericRepository<Usuario> UsuarioRepo)
        {
            _DatosRepo = DatosRepo;

            _UsuarioRepo = UsuarioRepo;
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

        public async Task<Dato> ObtenerxNombre(string nombre)
        {
            throw new NotImplementedException();
        }

        public Task<Dato> ObtenerContacto()
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<Dato>> ObtenerTodos()
        {
           return await _DatosRepo.ObtenerTodos();
        }

        public Task<Dato> Obtener(string nombre)
        {
            throw new NotImplementedException();
        }
    }
}
