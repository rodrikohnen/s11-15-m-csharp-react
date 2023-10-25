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
    public class PaisController : ControllerBase
    {
        private readonly IPaisService _PaisService;

        public PaisController(IPaisService PaisService)
        {
            _PaisService = PaisService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Pai> queryPaisSQL = await _PaisService.ObtenerTodos();

            List<VMPais> Lista = queryPaisSQL
                                .Select(c => new VMPais()
                                {
                                    IdPais = c.IdPais,

                                    CodigoPais = c.CodigoPais,

                                    Pais = c.Pais,

                                    RutaImg = c.RutaImg,   
                                    
                                    NombreBandera = c.NombreBandera



                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMPais modelo)
        {
            IQueryable<Pai> queryPaiseSQL = await _PaisService.ObtenerTodos();

            Pai NuevoModelo = new Pai
            {
                CodigoPais = modelo.CodigoPais,

                Pais = modelo.Pais,

                RutaImg = modelo.RutaImg,

                NombreBandera = modelo.NombreBandera
            };

            bool respuesta = await _PaisService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMPais modelo)
        {
            IQueryable<Pai> queryPaiseSQL = await _PaisService.ObtenerTodos();

            Pai NuevoModelo = new Pai
            {
                IdPais = modelo.IdPais,

                CodigoPais = modelo.CodigoPais,

                Pais = modelo.Pais,

                RutaImg = modelo.RutaImg,

                NombreBandera = modelo.NombreBandera
            };

            bool respuesta = await _PaisService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _PaisService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
