using System;
using System.Linq;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface IAdminSalaService
    {
        Task<bool> Insertar(AdminSala modelo);
       
        Task<bool> Actualizar(AdminSala modelo);
        
        Task<bool> Eliminar(int id);
        
        Task<AdminSala> Obtener(int id);
        
        Task<IQueryable<AdminSala>> ObtenerTodos();
    }
}
