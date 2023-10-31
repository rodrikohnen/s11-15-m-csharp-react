using Mate.Speak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mate.Speak.Models.VModels;

namespace Mate.Speak.API_Conexion.ServiciosEyeson
{
    internal interface IAPIEyeson
    {
        Task<bool> CrearSala(object usuario, object room, string Autorizacion);

        Task<VMAutorizacionEyeson> ObtenerSala(string Autorizacion);
    }
}
