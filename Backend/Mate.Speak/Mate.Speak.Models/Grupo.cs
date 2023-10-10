using System;
using System.Collections.Generic;


namespace Mate.Speak.Models
{
    public partial class Grupo
    {
        public Grupo()
        {
            Datos = new HashSet<Dato>();
            Salas = new HashSet<Sala>();
        }

        public int IdGrupo { get; set; }
        public string? Grupo1 { get; set; }

        public virtual ICollection<Dato> Datos { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
