using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;

namespace Mate.Speak.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        private readonly IRolService _RolService;

        public RolController(IRolService rolService)
        {
            _RolService = rolService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar() 
        {
            IQueryable<Role> queryRolSQL = await _RolService.ObtenerTodos();

            List<VMRol> Lista = queryRolSQL
                               .Select(c => new VMRol()
                               {
                                   IdRol = c.IdRol,

                                   Roles = c.Roles
                               }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMRol modelo)
        {
            IQueryable<Role> queryRolSQL = await _RolService.ObtenerTodos();

            Role NuevoModelo = new Role
            {
                  Roles = modelo.Roles
            };

            bool respuesta = await _RolService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMRol modelo)
        {
            IQueryable<Role> queryRolSQL = await _RolService.ObtenerTodos();

            Role NuevoModelo = new Role
            {
                IdRol = modelo.IdRol,
                Roles = modelo.Roles
            };

            bool respuesta = await _RolService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _RolService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
