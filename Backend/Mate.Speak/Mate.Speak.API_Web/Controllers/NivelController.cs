using Mate.Speak.BLL.Services;
using Mate.Speak.Models.VModels;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class NivelController : ControllerBase
    {
        private readonly INivelService _NivelService;

        public NivelController(INivelService NivelService)
        {
            _NivelService = NivelService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Nivele> queryNivelSQL = await _NivelService.ObtenerTodos();

            List<VMNivel> Lista = queryNivelSQL
                                .Select(c => new VMNivel()
                                {
                                    IdNivel = c.IdNivel,

                                    Nivel = c.Nivel

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMNivel modelo)
        {
            IQueryable<Nivele> queryNivelSQL = await _NivelService.ObtenerTodos();

            Nivele NuevoModelo = new Nivele
            {
                Nivel = modelo.Nivel
            };

            bool respuesta = await _NivelService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMNivel modelo)
        {
            IQueryable<Nivele> queryNivelSQL = await _NivelService.ObtenerTodos();

            Nivele NuevoModelo = new Nivele
            {
                IdNivel = modelo.IdNivel,

                Nivel = modelo.Nivel
            };

            bool respuesta = await _NivelService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _NivelService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
