using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Grupo
    {
        public Grupo()
        {
            Participantes = new HashSet<Participante>();
        }

        public int IdGrupo { get; set; }
        public string? Grupo1 { get; set; }
        public int Creador { get; set; }
        public int? NroParticipantes { get; set; }
        public int? IdIdioma { get; set; }

        public virtual Usuario CreadorNavigation { get; set; } = null!;
        public virtual Idioma? IdIdiomaNavigation { get; set; }
        public virtual ICollection<Participante> Participantes { get; set; }
    }
}
