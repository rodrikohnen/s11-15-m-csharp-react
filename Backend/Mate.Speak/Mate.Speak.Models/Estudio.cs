using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Estudio
    {
        public int IdEstudio { get; set; }
        public int IdUsuario { get; set; }
        public int IdIdioma { get; set; }
        public int IdNivel { get; set; }
        public string? DesEstudio { get; set; }

        public virtual Idioma IdIdiomaNavigation { get; set; } = null!;
        public virtual Nivele IdNivelNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
