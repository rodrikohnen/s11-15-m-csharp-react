using System;
using System.Collections.Generic;


namespace Mate.Speak.Models
{
    public partial class Sala
    {
        public Sala()
        {
            AdminSalas = new HashSet<AdminSala>();
        }

        public int IdSala { get; set; }
        public string? NombreSala { get; set; }
        public int IdIdioma { get; set; }
        public int IdGrupo { get; set; }
        public int IdUsuario { get; set; }
        public string Disponibilidad { get; set; } = null!;
        public int IdRol { get; set; }

        public virtual Grupo IdGrupoNavigation { get; set; } = null!;
        public virtual Idioma IdIdiomaNavigation { get; set; } = null!;
        public virtual Role IdRolNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        public virtual ICollection<AdminSala> AdminSalas { get; set; }
    }
}
