using System;
using System.Collections.Generic;
using Mate.Speak.Models;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public interface IGrupoService
{
    Task<bool> Insertar(Grupo modelo);
    Task<bool> Actualizar(Grupo modelo);
    Task<bool> Eliminar(int id);
    Task<Grupo> Obtener(int id);
    Task<IQueryable<Grupo>> ObtenerTodos();
}