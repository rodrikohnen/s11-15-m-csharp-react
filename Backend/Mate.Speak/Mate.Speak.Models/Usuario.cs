using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Datos = new HashSet<Dato>();
            Estudios = new HashSet<Estudio>();
            Grupos = new HashSet<Grupo>();
            Participantes = new HashSet<Participante>();
            Salas = new HashSet<Sala>();
        }

        public int IdUsuario { get; set; }
        public int IdRol { get; set; }
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public string Correo { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? Token { get; set; }
        public string Activo { get; set; } = null!;
        public string? Usuario1 { get; set; }

        public virtual Role IdRolNavigation { get; set; } = null!;
        public virtual ICollection<Dato> Datos { get; set; }
        public virtual ICollection<Estudio> Estudios { get; set; }
        public virtual ICollection<Grupo> Grupos { get; set; }
        public virtual ICollection<Participante> Participantes { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
