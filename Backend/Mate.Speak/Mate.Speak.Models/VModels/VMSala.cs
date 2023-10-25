using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMSala
    {
        public int IdSala { get; set; }
        public string NombreSala { get; set; }
        public int IdIdioma { get; set; }
        public int IdGrupo { get; set; }
        public int IdUsuario { get; set; }
        public string Disponibilidad { get; set; }
        public int IdRol { get; set; }

    }
}
