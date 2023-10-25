using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.BLL.Services
{
    public interface IIdiomaService
    {
        Task<bool> Insertar(Idioma modelo);

        Task<bool> Actualizar(Idioma modelo);

        Task<bool> Eliminar(int id);

        Task<Idioma> Obtener(int id);

        Task<Idioma> Obtenerxnombre(string nombre);

        Task<IQueryable<Idioma>> ObtenerTodos();
    }
}
