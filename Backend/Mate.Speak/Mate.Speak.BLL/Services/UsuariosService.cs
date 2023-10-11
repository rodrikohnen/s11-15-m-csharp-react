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

        public Task<bool> Actualizar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Actualizarpassword(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> desactivarUsuario(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Usuario>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Obtenerxusuario(string usuario)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Obtenerxusuarioxrol(string usuario)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Obtnener(int id)
        {
            throw new NotImplementedException();
        }
    }
}
