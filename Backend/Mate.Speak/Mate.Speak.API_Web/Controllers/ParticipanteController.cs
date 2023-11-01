using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
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
    public class ParticipanteController : ControllerBase
    {
        private readonly IParticipanteService _participanteService;

        public ParticipanteController(IParticipanteService participanteService)
        {
            _participanteService = participanteService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerParticipante(int id)
        {
            var participante = await _participanteService.Obtener(id);
            if (participante == null)
            {
                return NotFound();
            }
            return Ok(participante);
        }

        [HttpGet]
        public async Task<IActionResult> ListarParticipantes()
        {
            var participantes = await _participanteService.ObtenerTodos();
            if (participantes == null || !participantes.Any())
            {
                return NoContent();
            }
            return Ok(participantes);
        }

        [HttpPost]
        public async Task<IActionResult> InsertarParticipante([FromBody] Participante participante)
        {
            if (participante == null)
            {
                return BadRequest();
            }

            var exito = await _participanteService.Insertar(participante);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo insertar el participante.");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarParticipante(int id, [FromBody] Participante participante)
        {
            if (id != participante.IdParticipantes)
            {
                return BadRequest();
            }

            var exito = await _participanteService.Actualizar(participante);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo actualizar el participante.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarParticipante(int id)
        {
            var exito = await _participanteService.Eliminar(id);
            if (exito)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "No se pudo eliminar el participante.");
        }
    }
}
