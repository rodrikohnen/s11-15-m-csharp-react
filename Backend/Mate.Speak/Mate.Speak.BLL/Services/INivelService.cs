using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface INivelService
    {
        Task<bool> Insertar(Nivele modelo);

        Task<bool> Actualizar(Nivele modelo);

        Task<bool> Eliminar(int id);

        Task<Nivele> Obtener(int id);

        Task<Nivele> Obtenerpornombre(string nombre);

        Task<IQueryable<Nivele>> ObtenerTodos();
    }
}
