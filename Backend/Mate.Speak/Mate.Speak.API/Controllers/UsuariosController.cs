using Mate.Speak.BLL.Services;
using Mate.Speak.Models.VModels;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuariosService _usuariosService;

        public UsuariosController(IUsuariosService usuariosService)
        {
            _usuariosService = usuariosService;
        }
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Usuario> queryUsuarioSQL = await _usuariosService.ObtenerTodos();

            List<VMUsuarios> Lista = queryUsuarioSQL
                                 .Select(c => new VMUsuarios()
                                 {
                                     IdUsuario = c.IdUsuario,
        
                                     Usuario1 = c.Usuario1, 
        
                                     Contraseña= c.Contraseña, 
                                     
                                     IdRol = c.IdRol,
                                     
                                     IdDatos = c.IdDatos
  
                                 }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> insertar([FromBody] VMUsuarios modelo)
        {
            IQueryable<Usuario> queryUsuariosSQL = await _usuariosService.ObtenerTodos();

            Usuario NuevoModelo = new Usuario()
            {

                Usuario1 = modelo.Usuario1,

                Contraseña = modelo.Contraseña,

                IdRol = modelo.IdRol,

                IdDatos = modelo.IdDatos

            };

            bool respuesta = await _usuariosService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMUsuarios modelo)
        {
            IQueryable<Usuario> queryUsuariosSQL = await _usuariosService.ObtenerTodos();

            Usuario NuevoModelo = new Usuario()
            {
                IdUsuario = modelo.IdUsuario,

                Usuario1 = modelo.Usuario1,

                Contraseña = modelo.Contraseña,

                IdRol = modelo.IdRol,

                IdDatos = modelo.IdDatos

            };

            bool respuesta = await _usuariosService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {

            bool respuesta = await _usuariosService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
