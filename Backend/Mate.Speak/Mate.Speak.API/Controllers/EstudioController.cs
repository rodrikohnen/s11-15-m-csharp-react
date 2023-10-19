using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Mate.Speak.BLL.Services;
using Mate.Speak.Models.VModels;
using Mate.Speak.Models;

namespace Mate.Speak.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class EstudioController : ControllerBase
    {
        private readonly IEstudioService _estudioService;

        public EstudioController(IEstudioService estudioService)
        {
            _estudioService= estudioService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Estudio> queryEstudioSQL = await _estudioService.ObtenerTodos();

            List<VMEstudio> Lista = queryEstudioSQL
                               .Select(c => new VMEstudio()
                               {
                                   Renglon = c.Renglon,

                                   IdEstudio = c.IdEstudio,
                                   
                                   IdIdioma = c.IdIdioma,
                                   
                                   IdNivel = c.IdNivel,
                                   
                                   IdUsuario = c.IdUsuario,
                                   
                                   Certificado=c.Certificado

                                   
                               }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMEstudio modelo)
        {
            IQueryable<Estudio> queryRolSQL = await _estudioService.ObtenerTodos();

            Estudio NuevoModelo = new Estudio
            {
                Renglon = modelo.Renglon,

                IdEstudio = modelo.IdEstudio,

                IdIdioma = modelo.IdIdioma,

                IdNivel = modelo.IdNivel,

                IdUsuario = modelo.IdUsuario,

                Certificado = modelo.Certificado
            };

            bool respuesta = await _estudioService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMEstudio modelo)
        {
            IQueryable<Estudio> queryRolSQL = await _estudioService.ObtenerTodos();

            Estudio NuevoModelo = new Estudio
            {
                Renglon = modelo.Renglon,

                IdEstudio = modelo.IdEstudio,

                IdIdioma = modelo.IdIdioma,

                IdNivel = modelo.IdNivel,

                IdUsuario = modelo.IdUsuario,

                Certificado = modelo.Certificado
            };

            bool respuesta = await _estudioService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _estudioService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

    }
}
