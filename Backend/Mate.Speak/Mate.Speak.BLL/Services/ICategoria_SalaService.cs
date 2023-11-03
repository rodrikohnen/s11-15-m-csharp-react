using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface ICategoria_SalaService
    {
        Task<bool> Insertar(CategoriaSala modelo);

        Task<bool> Actualizar(CategoriaSala modelo);

        Task<bool> Eliminar(int id);

        Task<CategoriaSala> Obtener(int id);

        Task<CategoriaSala> Obtenerpornombre(string nombre);

        Task<IQueryable<CategoriaSala>> ObtenerTodos();
    }
}
