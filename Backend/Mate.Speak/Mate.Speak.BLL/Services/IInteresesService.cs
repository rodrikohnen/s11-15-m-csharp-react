using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IInteresesService
    {
        Task<bool> Insertar(Interese modelo);

        Task<bool> Actualizar(Interese modelo);

        Task<bool> Eliminar(int id);

        Task<Interese> Obtener(int id);

        Task<Interese> ObtenerxNombre(string nombre);

        Task<IQueryable<Interese>> ObtenerTodos();
    }
}
