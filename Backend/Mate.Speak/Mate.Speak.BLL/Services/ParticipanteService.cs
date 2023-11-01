using System;
using System.Collections.Generic;
using Mate.Speak.Models;
using System.Text;
using System.Linq;
using System.Threading.Tasks;

public class ParticipanteService : IParticipanteService
{
    private readonly IGenericRepository<Participante> _participanteRepository;

    public ParticipanteService(IGenericRepository<Participante> participanteRepository)
    {
        _participanteRepository = participanteRepository;
    }

    public async Task<bool> Insertar(Participante modelo)
    {
        try
        {
            await _participanteRepository.Insertar(modelo);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public async Task<bool> Actualizar(Participante modelo)
    {
        try
        {
            await _participanteRepository.Actualizar(modelo);
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
            await _participanteRepository.Eliminar(id);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public async Task<Participante> Obtener(int id)
    {
        return await _participanteRepository.Obtener(id);
    }

    public async Task<IQueryable<Participante>> ObtenerTodos()
    {
        return await _participanteRepository.ObtenerTodos();
    }
}
