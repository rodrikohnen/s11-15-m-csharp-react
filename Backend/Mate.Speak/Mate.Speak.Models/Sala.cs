using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Sala
    {
        public Sala()
        {
            AdminSalas = new HashSet<AdminSala>();
        }

        public int IdSala { get; set; }
        public int IdCategoriasala { get; set; }
        public int IdCalificacion { get; set; }
        public string? NombreSala { get; set; }
        public int IdIdioma { get; set; }
        public int IdUsuarioCreador { get; set; }
        public int? Participantes { get; set; }
        public string? Descripcion { get; set; }
        public DateTime? Fecha { get; set; }
        public string? TokenSala { get; set; }

        public virtual Calificacion IdCalificacionNavigation { get; set; } = null!;
        public virtual CategoriaSala IdCategoriasalaNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioCreadorNavigation { get; set; } = null!;
        public virtual ICollection<AdminSala> AdminSalas { get; set; }
    }
}
