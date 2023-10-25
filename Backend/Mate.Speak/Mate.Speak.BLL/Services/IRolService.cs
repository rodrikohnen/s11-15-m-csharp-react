using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IRolService
    {
        Task<bool> Insertar(Role modelo);

        Task<bool> Actualizar(Role modelo);

        Task<bool> Eliminar(int id);

        Task<Role> Obtener(int id);

        Task<Role> Obtenerpornombre(string nombre);

        Task<IQueryable<Role>> ObtenerTodos();
    }
}
