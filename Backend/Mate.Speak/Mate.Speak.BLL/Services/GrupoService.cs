using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class GrupoService: IGrupoService
    {
        private readonly IGenericRepository<Grupo> _GrupoRepo;

        public GrupoService(IGenericRepository<Grupo> GrupoRepo)
        {
            _GrupoRepo= GrupoRepo;
        }
        public async Task<bool> Actualizar(Grupo modelo)
        {
            return await _GrupoRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _GrupoRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Grupo modelo)
        {
            return await _GrupoRepo.Insertar(modelo);
        }

        public async Task<Grupo> Obtener(int id)
        {
            return await _GrupoRepo.Obtener(id);
        }

        public async Task<IQueryable<Grupo>> ObtenerTodos()
        {
            return await _GrupoRepo.ObtenerTodos();
        }

        public Task<Grupo> ObtenerxGrupo(string grupo)
        {
            throw new NotImplementedException();
        }
    }
}
