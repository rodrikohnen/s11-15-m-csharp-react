using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class EstudioService : IEstudioService
    {
        private readonly IGenericRepository<Estudio> _EstudioRepo;
        public EstudioService(IGenericRepository<Estudio> estudioRepo)
        {

            _EstudioRepo = estudioRepo;

        }
        public async Task<bool> Actualizar(Estudio modelo)
        {
            return await _EstudioRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _EstudioRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Estudio modelo)
        {
            return await _EstudioRepo.Insertar(modelo);
        }

        public async Task<Estudio> Obtener(int id)
        {
            return await _EstudioRepo.Obtener(id);
        }

        public async Task<IQueryable<Estudio>> ObtenerTodos()
        {
            return await _EstudioRepo.ObtenerTodos();
        }

        public Task<Estudio> ObtenerxGrupo(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Estudio> ObtenerxIdiomas(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Estudio> ObtenerxNivel(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Estudio> ObtenerxUsuario(int id)
        {
            throw new NotImplementedException();
        }
    }
}
