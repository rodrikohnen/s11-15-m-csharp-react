using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Idioma
    {
        public Idioma()
        {
            AdminSalas = new HashSet<AdminSala>();
            Datos = new HashSet<Dato>();
            Estudios = new HashSet<Estudio>();
            Grupos = new HashSet<Grupo>();
        }

        public int IdIdioma { get; set; }
        public string? Idiomas { get; set; }

        public virtual ICollection<AdminSala> AdminSalas { get; set; }
        public virtual ICollection<Dato> Datos { get; set; }
        public virtual ICollection<Estudio> Estudios { get; set; }
        public virtual ICollection<Grupo> Grupos { get; set; }
    }
}
