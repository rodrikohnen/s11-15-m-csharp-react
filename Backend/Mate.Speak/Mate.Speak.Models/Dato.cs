using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Dato
    {
        public int IdDatos { get; set; }
        public int IdUsuario { get; set; }
        public int Nativo { get; set; }
        public int IdInteres { get; set; }
        public int IdPais { get; set; }
        public string? Telefono { get; set; }
        public string? AvatarRoot { get; set; }
        public string? NombreAvatar { get; set; }
        public int IdCalificacion { get; set; }
        public string? Urlcertificado { get; set; }
        public string? Nombrecertificado { get; set; }
        public string? Certificado { get; set; }

        public virtual Calificacion IdCalificacionNavigation { get; set; } = null!;
        public virtual Interese IdInteresNavigation { get; set; } = null!;
        public virtual Pai IdPaisNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        public virtual Idioma NativoNavigation { get; set; } = null!;
    }
}
