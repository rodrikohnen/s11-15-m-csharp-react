using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.Models.VModels
{
    public class VMCredenciales
    {
        [Required]
        [EmailAddress]
        public string ?Correo { get; set; } 

        [Required]
        public string ?Password { get; set; } 

    }
}
