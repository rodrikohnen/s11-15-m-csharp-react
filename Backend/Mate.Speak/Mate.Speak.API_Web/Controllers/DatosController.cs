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
    [Authorize]
    [ApiController]
    public class DatosController : ControllerBase
    {
        private readonly IDatosService _DatosService;

        public DatosController(IDatosService DatosService)
        {
            _DatosService = DatosService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Dato> queryDatosSQL = await _DatosService.ObtenerTodos();

            List<VMDatos> Lista = queryDatosSQL
                                .Select(c => new VMDatos()
                                {
                                  IdDatos = c.IdDatos,

                                  IdUsuario = c.IdDatos, 

                                  Nativo = c.Nativo, 

                                  IdInteres = c.IdInteres,

                                  IdPais = c.IdPais,

                                  Telefono = c.Telefono,

                                  AvatarRoot = c.AvatarRoot,

                                  NombreAvatar = c.NombreAvatar, 

                                  IdCalificacion = c.IdCalificacion,

                                  Urlcertificado = c.Urlcertificado, 

                                  Nombrecertificado = c.Nombrecertificado, 

                                  Certificado = c.Certificado 

                                }).ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] VMDatos modelo)
        {
            IQueryable<Dato> queryDatosSQL = await _DatosService.ObtenerTodos();

            Dato NuevoModelo = new Dato()
            {
                IdUsuario = modelo.IdUsuario,

                Nativo = modelo.Nativo,

                IdInteres = modelo.IdInteres,

                IdPais = modelo.IdPais,

                Telefono = modelo.Telefono,

                AvatarRoot =  modelo.AvatarRoot,

                NombreAvatar = modelo.NombreAvatar,

                IdCalificacion = modelo.IdCalificacion,

                Urlcertificado = modelo.Urlcertificado,

                Nombrecertificado = modelo.Nombrecertificado,

                Certificado = modelo.Certificado
            };

            bool respuesta = await _DatosService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMDatos modelo)
        {
            IQueryable<Dato> queryDatosSQL = await _DatosService.ObtenerTodos();

            Dato NuevoModelo = new Dato()
            {
                IdUsuario = modelo.IdUsuario,

                Nativo = modelo.Nativo,

                IdInteres = modelo.IdInteres,

                IdPais = modelo.IdPais,

                Telefono = modelo.Telefono,

                AvatarRoot = modelo.AvatarRoot,

                NombreAvatar = modelo.NombreAvatar,

                IdCalificacion = modelo.IdCalificacion,

                Urlcertificado = modelo.Urlcertificado,

                Nombrecertificado = modelo.Nombrecertificado,

                Certificado = modelo.Certificado
            };

            bool respuesta = await _DatosService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            
            bool respuesta = await _DatosService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
