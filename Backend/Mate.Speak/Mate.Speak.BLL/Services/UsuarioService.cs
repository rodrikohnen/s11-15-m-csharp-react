using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IGenericRepository<Usuario> _UsuarioRepo;

        public UsuarioService(IGenericRepository<Usuario> UsuarioRepo)
        {
            _UsuarioRepo = UsuarioRepo; 
        }
        public async Task<bool> Actualizar(Usuario modelo)
        {
            return await _UsuarioRepo.Actualizar(modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _UsuarioRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Usuario modelo)
        {
            return await _UsuarioRepo.Insertar(modelo);
        }

        public async Task<Usuario> Obtener(int id)
        {
            return await _UsuarioRepo.Obtener(id);
        }

        public async Task<Usuario> Obtener(string nombre)
        {
            IQueryable<Usuario> querySQL = await _UsuarioRepo.ObtenerTodos();
            Usuario usuario = querySQL.Where(c => c.Nombre == nombre).FirstOrDefault();
            return usuario;
        }

        public async Task<Usuario> ObtenerCredenciales(string correo, string clave)
        {
            IQueryable<Usuario> querySQL = await _UsuarioRepo.ObtenerTodos();
            Usuario usuario = querySQL.Where(c => c.Correo == correo && c.Password == clave).FirstOrDefault();
            return usuario;
        }

        public async Task<IQueryable<Usuario>> ObtenerTodos()
        {
            return await _UsuarioRepo.ObtenerTodos();
        }

        public async Task<Usuario> Obtenerxrol(int idrol)
        {
            IQueryable<Usuario> querySQL = await _UsuarioRepo.ObtenerTodos();
            Usuario usuario = querySQL.Where(c => c.IdRol == idrol).FirstOrDefault();
            return usuario;
        }
    }
}
