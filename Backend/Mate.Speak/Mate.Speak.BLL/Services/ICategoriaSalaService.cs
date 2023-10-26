using Mate.Speak.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface ICategoriaSalaService
    {
        Task<bool> Insertar(ViewModelCategoriaSala modelo);
        Task<bool> Actualizar(ViewModelCategoriaSala modelo);
        Task<bool> Eliminar(int id);
        Task<CategoriaSala> Obtener(int id);
        Task<IQueryable<CategoriaSala>> ObtenerTodos();
    }
}