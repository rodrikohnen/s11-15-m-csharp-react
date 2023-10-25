using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IDatosService
    {
        Task<bool> Insertar(Dato modelo);

        Task<bool> Actualizar(Dato modelo);

        Task<bool> Eliminar(int id);

        Task<Dato> Obtener(int id);

        Task<Dato> Obtener(string nombre);

        Task<Dato> ObtenerContacto();

        Task<IQueryable<Dato>> ObtenerTodos();
    }
}
