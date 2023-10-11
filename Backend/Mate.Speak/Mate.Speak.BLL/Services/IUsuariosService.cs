using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface IUsuariosService
    {
        Task<bool> Insertar(Usuario modelo);

        Task<bool> Actualizar(Usuario modelo);

        Task<bool> Eliminar(int id);

        Task<Usuario> Obtnener(int id);

        Task<IQueryable<Usuario>> ObtenerTodos();

        Task<Usuario> Obtenerxusuario(string usuario);

        Task<Usuario> Obtenerxusuarioxrol(string usuario);

        Task<Usuario> activarUsuario(int id);

        Task<Usuario> desactivarUsuario(int id);

        Task<Usuario> Actualizarpassword(int id);


    }
}
