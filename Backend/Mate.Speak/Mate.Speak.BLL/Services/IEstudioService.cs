using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        Task<Estudio> ObtenerxIdiomas(int id);

        Task<Estudio> ObtenerxNivel(int id);

        Task<Estudio> ObtenerxGrupo(int id);

        Task<Estudio> ObtenerxUsuario(int id);

        Task<IQueryable<Estudio>> ObtenerTodos();
    }
}
