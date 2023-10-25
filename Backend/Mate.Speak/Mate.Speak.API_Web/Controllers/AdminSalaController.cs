using Mate.Speak.BLL.Services;
using Mate.Speak.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mate.Speak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminSalaController : ControllerBase
    {
        private readonly IAdminSalaService _adminSalaService;

        public AdminSalaController(IAdminSalaService adminSalaService)
        {
            _adminSalaService = adminSalaService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            IQueryable<AdminSala> queryAdminSalaSQL = await _adminSalaService.ObtenerTodos();

            // posible transformacion a un modelo de vista o si es necesario
            var Lista = queryAdminSalaSQL.ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] AdminSala modelo)
        {
            bool respuesta = await _adminSalaService.Insertar(modelo);

            return StatusCode(StatusCodes.Status200OK, new { valor = respuesta });
        }

    }
}
