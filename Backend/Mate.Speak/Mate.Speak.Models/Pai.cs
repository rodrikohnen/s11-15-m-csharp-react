using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Pai
    {
        public Pai()
        {
            Datos = new HashSet<Dato>();
        }

        public int IdPais { get; set; }
        public string? CodigoPais { get; set; }
        public string? Pais { get; set; }
        public string? RutaImg { get; set; }
        public string? NombreBandera { get; set; }

        public virtual ICollection<Dato> Datos { get; set; }
    }
}
