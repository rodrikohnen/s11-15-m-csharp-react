using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMAdminSala
    {
        public int IdAdmin { get; set; }
        public int Renglon { get; set; }
        public int IdSala { get; set; }
        public int IdUsuario { get; set; }
        public int IdRol { get; set; }
        public DateTime? Fecha { get; set; }
        public int Capacidad { get; set; }
        public string Activa { get; set; }

    }
}
