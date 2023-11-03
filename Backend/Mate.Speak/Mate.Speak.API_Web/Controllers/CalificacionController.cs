using Mate.Speak.BLL.Services;
using Mate.Speak.Models.VModels;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Scaffolding;
using Microsoft.AspNetCore.Authorization;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        private readonly ICalificacionService _CalificacionService;

        public CalificacionController(ICalificacionService CalificacionService)
        {
            _CalificacionService = CalificacionService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Calificacion> queryCalificacionSQL = await _CalificacionService.ObtenerTodos();

            List<VMCalificacion> Lista = queryCalificacionSQL
                                .Select(c => new VMCalificacion()
                                {
                                    IdCalificacion = c.IdCalificacion,

                                    Calificacion1 = c.Calificacion1,

                                    Rol = c.Rol,

                                    Sala = c.Sala,

                                    NroCalificacion = c.NroCalificacion, 

                                    FacilComprender = c.FacilComprender,

                                    AcordeNivel = c.AcordeNivel,

                                    CalidadRecursos = c.CalidadRecursos,

                                     Duracion = c.Duracion,

                                     TemarioActualizado = c.TemarioActualizado,

                                     CalidadComunica = c.CalidadComunica,

                                     InteracionaEstudiantes = c.InteracionaEstudiantes,

                                     Retroalimentacion = c.Retroalimentacion,

                                     ContestaConsulta = c.ContestaConsulta,

                                     Otro = c.Otro,

                                     Comentario = c.Comentario,

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMCalificacion modelo)
        {
            IQueryable<Calificacion> queryCalificacionSQL = await _CalificacionService.ObtenerTodos();

            Calificacion NuevoModelo = new Calificacion()
            {
                Calificacion1 = modelo.Calificacion1,

                Rol = modelo.Rol,

                Sala = modelo.Sala,

                NroCalificacion = modelo.NroCalificacion,

                FacilComprender = modelo.FacilComprender,

                AcordeNivel = modelo.AcordeNivel,

                CalidadRecursos = modelo.CalidadRecursos,

                Duracion = modelo.Duracion,

                TemarioActualizado = modelo.TemarioActualizado,

                CalidadComunica = modelo.CalidadComunica,

                InteracionaEstudiantes = modelo.InteracionaEstudiantes,

                Retroalimentacion = modelo.Retroalimentacion,

                ContestaConsulta = modelo.ContestaConsulta,

                Otro = modelo.Otro,

                Comentario = modelo.Comentario,
            };

            bool respuesta = await _CalificacionService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMCalificacion modelo)
        {
            IQueryable<Calificacion> queryCalificacionSQL = await _CalificacionService.ObtenerTodos();

            Calificacion NuevoModelo = new Calificacion()
            {
                IdCalificacion = modelo.IdCalificacion,

                Calificacion1 = modelo.Calificacion1,

                Rol = modelo.Rol,

                Sala = modelo.Sala,

                NroCalificacion = modelo.NroCalificacion,

                FacilComprender = modelo.FacilComprender,

                AcordeNivel = modelo.AcordeNivel,

                CalidadRecursos = modelo.CalidadRecursos,

                Duracion = modelo.Duracion,

                TemarioActualizado = modelo.TemarioActualizado,

                CalidadComunica = modelo.CalidadComunica,

                InteracionaEstudiantes = modelo.InteracionaEstudiantes,

                Retroalimentacion = modelo.Retroalimentacion,

                ContestaConsulta = modelo.ContestaConsulta,

                Otro = modelo.Otro,

                Comentario = modelo.Comentario,
            };

            bool respuesta = await _CalificacionService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            bool respuesta = await _CalificacionService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
