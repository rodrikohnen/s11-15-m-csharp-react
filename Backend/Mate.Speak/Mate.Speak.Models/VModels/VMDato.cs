using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMDato
    {
        public int IdDatos { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Identidad { get; set; } = null!;
        public int IdGrupo { get; set; }
        public string Correo { get; set; } = null!;
        public string? Telefono { get; set; }
        public int Nativo { get; set; }
        public string? Intereses { get; set; }
        public string Sexo { get; set; } = null!;
        public int IdEstudio { get; set; }
        public string? Pais { get; set; }
        public string? AvatarRoot { get; set; }
        public string? NombreAvatar { get; set; }

    }
}
