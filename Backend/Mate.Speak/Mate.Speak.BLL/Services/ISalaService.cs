using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface ISalaService
    {
        Task<bool> Insertar(Sala modelo);
        Task<bool> Actualizar(Sala modelo);
        Task<bool> Eliminar(int id);
        Task<Sala> Obtener(int id);
        Task<IQueryable<Sala>> ObtenerTodos();
    }
}
