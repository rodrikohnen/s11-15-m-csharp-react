using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class IdiomaService : IIdiomaService
    {

        private readonly IGenericRepository<Idioma> _IdiomaRepo;

        public IdiomaService(IGenericRepository<Idioma> IdiomaRepo)
        {
            _IdiomaRepo = IdiomaRepo;
        }
        public async Task<bool> Actualizar(Idioma modelo)
        {
            return await _IdiomaRepo.Actualizar(modelo);    
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _IdiomaRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Idioma modelo)
        {
            return await _IdiomaRepo.Insertar(modelo);
        }

        public async Task<Idioma> Obtener(int id)
        {
            return await _IdiomaRepo.Obtener(id);
        }

        public async Task<IQueryable<Idioma>> ObtenerTodos()
        {
            return await _IdiomaRepo.ObtenerTodos();
        }

        public async Task<Idioma> Obtenerxnombre(string nombre)
        {
            IQueryable<Idioma> querySQL = await _IdiomaRepo.ObtenerTodos();
            Idioma Idiomas = querySQL.Where(c => c.Idiomas == nombre).FirstOrDefault();
            return Idiomas;
        }
    }
}
