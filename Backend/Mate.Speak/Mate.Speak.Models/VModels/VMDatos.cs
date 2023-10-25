using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    internal class VMDatos
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
    }
}
