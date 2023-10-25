using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudioController : ControllerBase
    {
        private readonly IEstudioService _estudioService;

        public EstudioController(IEstudioService estudioService)
        {
            _estudioService = estudioService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Estudio> queryEstudioSQL = await _estudioService.ObtenerTodos();

            // Posible transformación a un modelo de vista si es necesario
            var Lista = queryEstudioSQL.ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] Estudio modelo)
        {
            bool respuesta = await _estudioService.Insertar(modelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
