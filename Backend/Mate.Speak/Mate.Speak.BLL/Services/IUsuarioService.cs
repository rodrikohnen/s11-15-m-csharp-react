using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IUsuarioService
    {
        Task<bool> Insertar(Usuario modelo);

        Task<bool> Actualizar(Usuario modelo);

        Task<bool> Eliminar(int id);

        Task<Usuario> Obtener(int id);

        Task<Usuario> ObtenerCredenciales(string correo, string clave);

        Task<Usuario> Obtenerxrol(int idrol);

        Task<Usuario> Obtener(string nombre);

        Task<IQueryable<Usuario>> ObtenerTodos();
    }
}
