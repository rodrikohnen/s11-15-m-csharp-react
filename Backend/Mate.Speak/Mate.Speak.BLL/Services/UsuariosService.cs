using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public class UsuariosService : IUsuariosService
    {
        private readonly IGenericRepository<Usuario> _UsuarioRepo;
        public UsuariosService(IGenericRepository<Usuario> UsuarioRepo)
        {
            _UsuarioRepo= UsuarioRepo;
        }

        public Task<Usuario> activarUsuario(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Actualizar(Usuario modelo)
        {
            return await _UsuarioRepo.Actualizar(modelo);
        }

        public Task<Usuario> Actualizarpassword(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> desactivarUsuario(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _UsuarioRepo.Eliminar(id);
        }

        public async Task<bool> Insertar(Usuario modelo)
        {
            return await _UsuarioRepo.Insertar(modelo);
        }

        public async Task<IQueryable<Usuario>> ObtenerTodos()
        {
            return await _UsuarioRepo.ObtenerTodos();
        }

        public Task<Usuario> Obtenerxusuario(string usuario)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Obtenerxusuarioxrol(string usuario)
        {
            throw new NotImplementedException();
        }

        public async Task<Usuario> Obtnener(int id)
        {
            return await _UsuarioRepo.Obtener(id);
        }
    }
}
