using System;
using System.Collections.Generic;
using Mate.Speak.Models;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class GrupoService : IGrupoService
{
    private readonly IGenericRepository<Grupo> _grupoRepository;

    public GrupoService(IGenericRepository<Grupo> grupoRepository)
    {
        _grupoRepository = grupoRepository;
    }

    public async Task<bool> Insertar(Grupo modelo)
    {
        try
        {
            await _grupoRepository.Insertar(modelo);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public async Task<bool> Actualizar(Grupo modelo)
    {
        try
        {
            await _grupoRepository.Actualizar(modelo);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public async Task<bool> Eliminar(int id)
    {
        try
        {
            await _grupoRepository.Eliminar(id);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public async Task<Grupo> Obtener(int id)
    {
        return await _grupoRepository.Obtener(id);
    }

    public async Task<IQueryable<Grupo>> ObtenerTodos()
    {
        return await _grupoRepository.ObtenerTodos();
    }
}
