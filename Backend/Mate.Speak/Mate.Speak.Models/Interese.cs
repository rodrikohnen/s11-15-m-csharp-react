using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Interese
    {
        public Interese()
        {
            Datos = new HashSet<Dato>();
        }

        public int IdInteres { get; set; }
        public string? Intereses { get; set; }

        public virtual ICollection<Dato> Datos { get; set; }
    }
}
