using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class GrupoController : ControllerBase
    {
        private readonly IGrupoService _grupoService;

        public GrupoController(IGrupoService grupoService)
        {
            _grupoService = grupoService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerGrupo(int id)
        {
            var grupo = await _grupoService.Obtener(id);
            if (grupo == null)
            {
                return NotFound();
            }
            return Ok(grupo);
        }

        [HttpGet]
        public async Task<IActionResult> ListarGrupos()
        {
            var grupos = await _grupoService.ObtenerTodos();
            if (grupos == null || !grupos.Any())
            {
                return NoContent();
            }
            return Ok(grupos);
        }

        [HttpPost]
        public async Task<IActionResult> InsertarGrupo([FromBody] Grupo grupo)
        {
            if (grupo == null)
            {
                return BadRequest();
            }

            var exito = await _grupoService.Insertar(grupo);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo insertar el grupo.");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarGrupo(int id, [FromBody] Grupo grupo)
        {
            if (id != grupo.IdGrupo)
            {
                return BadRequest();
            }

            var exito = await _grupoService.Actualizar(grupo);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo actualizar el grupo.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarGrupo(int id)
        {
            var exito = await _grupoService.Eliminar(id);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo eliminar el grupo.");
        }
    }
}
