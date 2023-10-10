using System;
using System.Collections.Generic;


namespace Mate.Speak.Models
{
    public partial class AdminSala
    {
        public int IdAdmin { get; set; }
        public int Renglon { get; set; }
        public int IdSala { get; set; }
        public int IdUsuario { get; set; }
        public int IdRol { get; set; }
        public DateTime? Fecha { get; set; }
        public int Capacidad { get; set; }
        public string? Activa { get; set; }

        public virtual Role IdRolNavigation { get; set; } = null!;
        public virtual Sala IdSalaNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
