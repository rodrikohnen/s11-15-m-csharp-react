using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface IEstudioService
    {
        Task<bool> Insertar(Estudio modelo);
        Task<bool> Actualizar(Estudio modelo);
        Task<bool> Eliminar(int id);
        Task<Estudio> Obtener(int id);
        Task<IQueryable<Estudio>> ObtenerTodos();
    }
}
