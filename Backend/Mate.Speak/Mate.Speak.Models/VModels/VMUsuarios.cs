using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMUsuarios
    {
        [Required]
        public int IdUsuario { get; set; }

        [Required]
        public int IdRol { get; set; }

        [Required]
        public string? Nombre { get; set; }

        [Required]
        public string? Apellido { get; set; }
        
        [Required]
        [EmailAddress]
        public string Correo { get; set; } = null!;
        
        [Required]
        public string Password { get; set; } = null!;
        
        public string? Token { get; set; }
        
        public string Activo { get; set; } = null!;
        
        public string? Usuario1 { get; set; }
    }
}
