using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Participante
    {
        public int IdParticipantes { get; set; }
        public int IdGrupo { get; set; }
        public int IdUsuario { get; set; }
        public string? Activo { get; set; }

        public virtual Grupo IdGrupoNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
