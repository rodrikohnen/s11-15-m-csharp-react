using Mate.Speak.BLL.Services;
using Mate.Speak.Models.VModels;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class IdiomaController : ControllerBase
    {
        private readonly IIdiomaService _IdiomaService;

        public IdiomaController(IIdiomaService IdiomaService)
        {
            _IdiomaService = IdiomaService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Idioma> queryIdiomaSQL = await _IdiomaService.ObtenerTodos();

            List<VMIdioma> Lista = queryIdiomaSQL
                                .Select(c => new VMIdioma()
                                {
                                    IdIdioma = c.IdIdioma,

                                    Idiomas = c.Idiomas

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMIdioma modelo)
        {
            IQueryable<Idioma> queryIdiomaSQL = await _IdiomaService.ObtenerTodos();

            Idioma NuevoModelo = new Idioma
            {
                Idiomas = modelo.Idiomas
            };

            bool respuesta = await _IdiomaService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMIdioma modelo)
        {
            IQueryable<Idioma> queryIdiomaSQL = await _IdiomaService.ObtenerTodos();

            Idioma NuevoModelo = new Idioma
            {
                IdIdioma = modelo.IdIdioma,
                Idiomas = modelo.Idiomas
            };

            bool respuesta = await _IdiomaService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            bool respuesta = await _IdiomaService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
