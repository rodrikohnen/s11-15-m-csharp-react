using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class AdminSala
    {
        public int IdAdmin { get; set; }
        public int? Renglon { get; set; }
        public int IdUsuario { get; set; }
        public int? IdSala { get; set; }
        public string? Activo { get; set; }
        public string? TokenInvitado { get; set; }

        public virtual Sala? IdSala1 { get; set; }
        public virtual Idioma? IdSalaNavigation { get; set; }
    }
}
