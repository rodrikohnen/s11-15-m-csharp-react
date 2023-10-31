using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class Categoria_SalaService : ICategoria_SalaService
    {
        private readonly IGenericRepository<CategoriaSala> _Categoria_salaRepo;

        public Categoria_SalaService(IGenericRepository<CategoriaSala> Categoria_salaRepo)
        {
            _Categoria_salaRepo = Categoria_salaRepo;
        }

        public async Task<bool> Actualizar(CategoriaSala modelo)
        {
            return await _Categoria_salaRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _Categoria_salaRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(CategoriaSala modelo)
        {
            return await _Categoria_salaRepo.Insertar(modelo);
        }

        public async Task<CategoriaSala> Obtener(int id)
        {
            return await _Categoria_salaRepo.Obtener(id);
                 
        }

        public Task<CategoriaSala> Obtenerpornombre(string nombre)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<CategoriaSala>> ObtenerTodos()
        {
            return await _Categoria_salaRepo.ObtenerTodos();
        }
    }
}
