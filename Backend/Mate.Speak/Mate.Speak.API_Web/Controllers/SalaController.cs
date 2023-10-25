using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalaController : ControllerBase
    {
        private readonly ISalaService _salaService;

        public SalaController(ISalaService salaService)
        {
            _salaService = salaService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Sala> querySalaSQL = await _salaService.ObtenerTodos();

            // Posible transformacion a un modelo de vista si es necesario
            var Lista = querySalaSQL.ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] Sala modelo)
        {
            bool respuesta = await _salaService.Insertar(modelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

    }
}
