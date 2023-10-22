using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Nivele
    {
        public Nivele()
        {
            Estudios = new HashSet<Estudio>();
        }

        public int IdNivel { get; set; }
        public string? Nivel { get; set; }

        public virtual ICollection<Estudio> Estudios { get; set; }
    }
}
