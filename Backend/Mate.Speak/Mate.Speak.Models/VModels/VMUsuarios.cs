using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMUsuarios
    {
        public int IdUsuario { get; set; }
        public string Usuario1 { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public int IdRol { get; set; }
        public int IdDatos { get; set; }
        public string? Tockend { get; set; }
        public string? Activo { get; set; }

    }
}
