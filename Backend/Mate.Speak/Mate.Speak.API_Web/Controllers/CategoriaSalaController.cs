using Microsoft.AspNetCore.Mvc;
using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using System.Threading.Tasks;

namespace Mate.Speak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaSalaController : ControllerBase
    {
        private readonly ICategoriaSalaService _categoriaSalaService;

        public CategoriaSalaController(ICategoriaSalaService categoriaSalaService)
        {
            _categoriaSalaService = categoriaSalaService;
        }

        // Implementar las acciones del controlador aquí
    }
}
