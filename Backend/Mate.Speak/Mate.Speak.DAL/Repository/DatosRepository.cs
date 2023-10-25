using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.DAL.Repository
{
    public class DatosRepository : IGenericRepository<Dato>
    {
        private readonly mateContext _dbcontext;
        
        public DatosRepository(mateContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<bool> Actualizar(Dato modelo)
        {
            _dbcontext.Datos.Update(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Dato modelo = _dbcontext.Datos.First(c => c.IdDatos == id);
            _dbcontext.Datos.Remove(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Dato modelo)
        {
            _dbcontext.Datos.Add(modelo);
            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<Dato> Obtener(int id)
        {
            return await _dbcontext.Datos.FindAsync(id);
        }

        public async Task<IQueryable<Dato>> ObtenerTodos()
        {
            IQueryable<Dato> queryDatosSQL = _dbcontext.Datos;
            return queryDatosSQL;
        }
    }
}
