using System;
using System.Collections.Generic;


namespace Mate.Speak.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            AdminSalas = new HashSet<AdminSala>();
            Estudios = new HashSet<Estudio>();
            Salas = new HashSet<Sala>();
        }

        public int IdUsuario { get; set; }
        public string Usuario1 { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public int IdRol { get; set; }
        public int IdDatos { get; set; }
        public string? Tockend { get; set; }
        public string? Activo { get; set; }

        public virtual Dato IdDatosNavigation { get; set; } = null!;
        public virtual Role IdRolNavigation { get; set; } = null!;
        public virtual ICollection<AdminSala> AdminSalas { get; set; }
        public virtual ICollection<Estudio> Estudios { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
