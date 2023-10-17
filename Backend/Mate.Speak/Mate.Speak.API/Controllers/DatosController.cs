using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Mate.Speak.Models.VModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Cors;

namespace Mate.Speak.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class DatosController : ControllerBase
    {
        private readonly IDatosService _datosService;

        public DatosController(IDatosService datosService)
        {
            _datosService = datosService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<Dato> queryDatoSQL = await _datosService.ObtenerTodos();

            List<VMDato> Lista = queryDatoSQL
                                 .Select(c => new VMDato()
                                 {
                                     IdDatos = c.IdDatos,
                                    
                                     Nombre = c.Nombre,
                                
                                     Apellido = c.Apellido, 
            
                                     Identidad = c.Identidad,
                
                                     IdGrupo = c.IdGrupo,
                                
                                     Correo = c.Correo, 
        
                                     Telefono = c.Telefono,
        
                                     Nativo = c.Nativo, 
        
                                     Intereses = c.Intereses,
        
                                     Sexo = c.Sexo, 
        
                                     IdEstudio = c.IdEstudio, 
        
                                     Pais = c.Pais, 
        
                                     AvatarRoot = c.AvatarRoot,
            
                                     NombreAvatar = c.NombreAvatar 

            
                                 }).ToList();
            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> insertar([FromBody]VMDato modelo)
        {
            IQueryable<Dato> queryDatoSQL = await _datosService.ObtenerTodos();

                        Dato NuevoModelo = new Dato()
                        {
                                     

                                     Nombre = modelo.Nombre,

                                     Apellido = modelo.Apellido,

                                     Identidad = modelo.Identidad,

                                     IdGrupo = modelo.IdGrupo,

                                     Correo = modelo.Correo,

                                     Telefono = modelo.Telefono,

                                     Nativo = modelo.Nativo,

                                     Intereses = modelo.Intereses,

                                     Sexo = modelo.Sexo,

                                     IdEstudio = modelo.IdEstudio,

                                     Pais = modelo.Pais,

                                     AvatarRoot = modelo.AvatarRoot,

                                     NombreAvatar = modelo.NombreAvatar
                        };

            bool respuesta = await _datosService.Insertar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta});
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar([FromBody] VMDato modelo)
        {
            IQueryable<Dato> queryDatoSQL = await _datosService.ObtenerTodos();

            Dato NuevoModelo = new Dato()
            {

                IdDatos = modelo.IdDatos,

                Nombre = modelo.Nombre,

                Apellido = modelo.Apellido,

                Identidad = modelo.Identidad,

                IdGrupo = modelo.IdGrupo,

                Correo = modelo.Correo,

                Telefono = modelo.Telefono,

                Nativo = modelo.Nativo,

                Intereses = modelo.Intereses,

                Sexo = modelo.Sexo,

                IdEstudio = modelo.IdEstudio,

                Pais = modelo.Pais,

                AvatarRoot = modelo.AvatarRoot,

                NombreAvatar = modelo.NombreAvatar
            };

            bool respuesta = await _datosService.Actualizar(NuevoModelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            
            bool respuesta = await _datosService.Eliminar(id);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }
    }
}
