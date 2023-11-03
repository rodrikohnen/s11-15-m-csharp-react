using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface ICalificacionService
    {
        Task<bool> Insertar(Calificacion modelo);

        Task<bool> Actualizar(Calificacion modelo);

        Task<bool> Eliminar(int id);

        Task<Calificacion> Obtener(int id);

        Task<Calificacion> Obtenerpornombre(string nombre);

        Task<IQueryable<Calificacion>> ObtenerTodos();
    }
}
