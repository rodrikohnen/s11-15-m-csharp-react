using System.ComponentModel.DataAnnotations;

namespace Mate.Speak.Models
{
    public class ViewModelCategoriaSala
    {
        public int IdCategoriaSala { get; set; }

        [Required(ErrorMessage = "El campo Categoria es obligatorio.")]
        public string Categoria { get; set; }
    }
}
