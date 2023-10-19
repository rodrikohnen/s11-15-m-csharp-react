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
    public class GrupoController : ControllerBase
    {
        private readonly IGrupoService _GrupoService;

        public GrupoController(IGrupoService GrupoService)
        {
            _GrupoService = GrupoService;   
        }
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Grupo> queryGrupoSQL = await _GrupoService.ObtenerTodos();

            List<VMGrupo> Lista = queryGrupoSQL
                               .Select(c => new VMGrupo()
                               {
                                   IdGrupo = c.IdGrupo,

                                   Grupo = c.Grupo1
                               }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMGrupo modelo)
        {
            IQueryable<Grupo> queryGrupoSQL = await _GrupoService.ObtenerTodos();

            Grupo NuevoModelo = new Grupo
            {
                Grupo1 = modelo.Grupo
            };

            bool respuesta = await _GrupoService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMGrupo modelo)
        {
            IQueryable<Grupo> queryGrupoSQL = await _GrupoService.ObtenerTodos();

            Grupo NuevoModelo = new Grupo
            {
                IdGrupo= modelo.IdGrupo,
                Grupo1 = modelo.Grupo
            };

            bool respuesta = await _GrupoService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _GrupoService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }


    }
}
