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
    public class InteresesController : ControllerBase
    {
        private readonly IInteresesService _Intereseservice;

        public InteresesController(IInteresesService Intereseservice)
        {
            _Intereseservice = Intereseservice;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Interese> queryInteresSQL = await _Intereseservice.ObtenerTodos();

            List<VMIntereses> Lista = queryInteresSQL 
                                .Select(c => new VMIntereses()
                                {
                                    IdInteres = c.IdInteres,

                                    Intereses = c.Intereses

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMIntereses modelo)
        {
            IQueryable<Interese> queryInteresSQL = await _Intereseservice.ObtenerTodos();

            Interese NuevoModelo = new Interese
            {
                Intereses = modelo.Intereses
            };

            bool respuesta = await _Intereseservice.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMIntereses modelo)
        {
            IQueryable<Interese> queryInteresSQL = await _Intereseservice.ObtenerTodos();

            Interese NuevoModelo = new Interese
            {
                Intereses = modelo.Intereses
            };

            bool respuesta = await _Intereseservice.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _Intereseservice.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
