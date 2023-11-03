using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioService _UsuariosService;
        public UsuariosController(IUsuarioService UsuariosService)
        {
            _UsuariosService = UsuariosService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Listar() 
        {
            IQueryable<Usuario> queryUsuarioSQL = await _UsuariosService.ObtenerTodos();

            List<VMUsuarios> Lista = queryUsuarioSQL
                                    .Select(c => new VMUsuarios
                                    {
                                        IdUsuario = c.IdUsuario,

                                        IdRol = c.IdRol,

                                        Nombre = c.Nombre,

                                        Apellido = c.Apellido,

                                        Correo = c.Correo,

                                        Password = c.Password,

                                        Token = c.Token,

                                        Activo = c.Activo,

                                        Usuario1 = c.Usuario1
                                    }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMUsuarios modelo)
        {
            IQueryable<Usuario> queryRoleSQL = await _UsuariosService.ObtenerTodos();

            Usuario NuevoModelo = new Usuario
            {
                IdRol = modelo.IdRol,

                Nombre = modelo.Nombre,

                Apellido = modelo.Apellido,

                Correo = modelo.Correo,

                Password = modelo.Password,

                Token = modelo.Token,

                Activo = modelo.Activo,

                Usuario1 = modelo.Usuario1
            };

            bool respuesta = await _UsuariosService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { usuario = NuevoModelo.IdUsuario, valor = respuesta});
            
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMUsuarios modelo)
        {
            IQueryable<Usuario> queryRoleSQL = await _UsuariosService.ObtenerTodos();

            Usuario NuevoModelo = new Usuario
            {
                IdUsuario = modelo.IdUsuario,

                IdRol = modelo.IdRol,

                Nombre = modelo.Nombre,

                Apellido = modelo.Apellido,

                Correo = modelo.Correo,

                Password = modelo.Password,

                Token = modelo.Token,

                Activo = modelo.Activo,

                Usuario1 = modelo.Usuario1
            };

            bool respuesta = await _UsuariosService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            
            bool respuesta = await _UsuariosService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
