using System;
using System.Collections.Generic;


namespace Mate.Speak.Models
{
    public partial class Idioma
    {
        public Idioma()
        {
            Datos = new HashSet<Dato>();
            Estudios = new HashSet<Estudio>();
            Salas = new HashSet<Sala>();
        }

        public int IdIdioma { get; set; }
        public string? Idiomas { get; set; }

        public virtual ICollection<Dato> Datos { get; set; }
        public virtual ICollection<Estudio> Estudios { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
