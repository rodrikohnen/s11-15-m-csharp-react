using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.Models;

namespace Mate.Speak.BLL.Services
{
    public interface IDatosService
    {
        Task<bool> Insertar(Dato modelo);

        Task<bool> Actualizar(Dato modelo);

        Task<bool> Eliminar(int id);

        Task<Dato> Obtener(int id);

        Task<Dato> Obtenerxnombre(string nombre);

        Task<Dato> ObtenerxApellido(string apellido);

        Task<Dato> ObtenerxIdioma(int idEstudio);

        Task<Dato> ObtenerxGrupo(int grupo);

        Task<Dato> ObtenerxPais(string pais);

        Task<Dato> ObtenerxIntereses(string interes);

        Task<IQueryable<Dato>> ObtenerTodos();
    }
}
