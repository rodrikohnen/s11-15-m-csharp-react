using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMEstudio
    {
        public int Renglon { get; set; }
        public int IdEstudio { get; set; }
        public int IdUsuario { get; set; }
        public int IdIdioma { get; set; }
        public int IdNivel { get; set; }
        public string? Certificado { get; set; }
    }
}
