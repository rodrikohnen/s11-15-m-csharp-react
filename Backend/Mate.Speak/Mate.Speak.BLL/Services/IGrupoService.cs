using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface IGrupoService
    {
        Task<bool> Insertar(Grupo modelo);

        Task<bool> Actualizar(Grupo modelo);

        Task<bool> Eliminar(int id);

        Task<Grupo> Obtener(int id);

        Task<Grupo> ObtenerxGrupo(string grupo);

        Task<IQueryable<Grupo>> ObtenerTodos();
    }
}
