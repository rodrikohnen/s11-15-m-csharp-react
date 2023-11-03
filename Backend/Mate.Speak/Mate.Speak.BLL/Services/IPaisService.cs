using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IPaisService
    {
        Task<bool> Insertar(Pai modelo);

        Task<bool> Actualizar(Pai modelo);

        Task<bool> Eliminar(int id);

        Task<Pai> Obtener(int id);

        Task<Pai> Obtener(string nombre);

        Task<Pai> Obtenerxcodigopais(string codigo);

        Task<IQueryable<Pai>> ObtenerTodos();
    }
}
