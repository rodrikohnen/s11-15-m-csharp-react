using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    internal class ParticipantesRepository : IGenericRepository<Participante>
    {
        private readonly mateContext _dbcontext;

        public ParticipantesRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public Task<bool> Actualizar(Participante modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Participante modelo)
        {
            throw new NotImplementedException();
        }

        public Task<Participante> Obtener(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Participante>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
