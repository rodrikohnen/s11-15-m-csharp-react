using System;
using System.Collections.Generic;
using Mate.Speak.Models;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public interface IParticipanteService
{
    Task<bool> Insertar(Participante modelo);
    Task<bool> Actualizar(Participante modelo);
    Task<bool> Eliminar(int id);
    Task<Participante> Obtener(int id);
    Task<IQueryable<Participante>> ObtenerTodos();
}
