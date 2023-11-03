using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class CategoriaSala
    {
        public CategoriaSala()
        {
            Salas = new HashSet<Sala>();
        }

        public int IdCategoriasala { get; set; }
        
        public string? Categoria { get; set; }

        public virtual ICollection<Sala> Salas { get; set; }
    }
}
