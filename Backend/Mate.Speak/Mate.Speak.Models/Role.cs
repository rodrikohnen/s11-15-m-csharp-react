using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Role
    {
        public Role()
        {
            AdminSalas = new HashSet<AdminSala>();
            Salas = new HashSet<Sala>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdRol { get; set; }
        public string? Roles { get; set; }

        public virtual ICollection<AdminSala> AdminSalas { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
