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
    [Authorize]
    [ApiController]
    public class Categoria_SalaController : ControllerBase
    {
        private readonly ICategoria_SalaService _CategoriaSalaService;

        public Categoria_SalaController(ICategoria_SalaService CategoriaSalaService)
        {
            _CategoriaSalaService = CategoriaSalaService;   
        }

        [HttpGet]
        public async Task<IActionResult> Listar() 
        {
            IQueryable<CategoriaSala> querycategoriaSalaSQL = await _CategoriaSalaService.ObtenerTodos();

            List<VMCategoriaSala> Lista = querycategoriaSalaSQL
                                .Select(c => new VMCategoriaSala()
                                {
                                    IdCategoriasala = c.IdCategoriasala,

                                    Categoria = c.Categoria

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMCategoriaSala modelo)
        {
            IQueryable<CategoriaSala> querycategoriaSalaSQL = await _CategoriaSalaService.ObtenerTodos();

            CategoriaSala NuevoModelo = new CategoriaSala()
            {
                Categoria = modelo.Categoria
            };

            bool respuesta = await _CategoriaSalaService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMCategoriaSala modelo)
        {
            IQueryable<CategoriaSala> querycategoriaSalaSQL = await _CategoriaSalaService.ObtenerTodos();

            CategoriaSala NuevoModelo = new CategoriaSala()
            {
                IdCategoriasala = modelo.IdCategoriasala,

                Categoria = modelo.Categoria
            };

            bool respuesta = await _CategoriaSalaService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _CategoriaSalaService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
