using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
        public class VMParticipante
    {
        public int IdParticipantes { get; set; }
        public int IdGrupo { get; set; }
        public int IdUsuario { get; set; }
        public string? Activo { get; set; }
        
    }

}