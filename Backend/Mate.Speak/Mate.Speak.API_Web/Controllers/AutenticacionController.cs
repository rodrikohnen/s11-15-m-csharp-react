using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mate.Speak.Models.VModels;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Mate.Speak.BLL.Services;
using System.Text;
using Mate.Speak.Models;

namespace Mate.Speak.API_Web.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacionController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        private readonly string secretkey;

        public AutenticacionController(IConfiguration config, IUsuarioService usuarioService)
        {
            secretkey = config.GetSection("settings").GetSection("secretkey").ToString();

            _usuarioService = usuarioService;
        }
        
        [HttpPost]
        [Route("validar")]
        public async Task<IActionResult> Validar([FromBody] VMCredenciales request) 
        {
          var usuario =   await _usuarioService.ObtenerCredenciales(request.Correo, request.Password);

            VMUsuarios NuevoModelo = new VMUsuarios
            {
                IdUsuario = usuario.IdUsuario,

                IdRol = usuario.IdRol,

                Nombre = usuario.Nombre,

                Apellido = usuario.Apellido,

                Correo = usuario.Correo,

                Password = usuario.Password,

                Token = usuario.Token,

                Activo = usuario.Activo,

                Usuario1 = usuario.Usuario1
            };

            if (request.Correo == NuevoModelo.Correo.Trim() && request.Password == NuevoModelo.Password.Trim()) 
            { 
                var ketBytes = Encoding.UTF8.GetBytes(secretkey);
                var claims = new ClaimsIdentity();

                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, request.Correo));

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = claims,
                    Expires = DateTime.UtcNow.AddMinutes(350),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(ketBytes), SecurityAlgorithms.HmacSha256Signature)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);
                string tokencreado = tokenHandler.WriteToken(tokenConfig);

                return StatusCode(StatusCodes.Status200OK, new {token = tokencreado, Usuario = NuevoModelo});

            }
            else 
            {
                return StatusCode(StatusCodes.Status401Unauthorized, new { token = " " });
            }


        }

    }
}
