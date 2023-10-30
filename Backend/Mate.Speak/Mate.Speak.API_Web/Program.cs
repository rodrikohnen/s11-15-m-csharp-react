using Microsoft.EntityFrameworkCore;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using Mate.Speak.DAL.Repository;
using Mate.Speak.BLL.Services;
//--json web token
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//llave secreta
builder.Configuration.AddJsonFile("appsettings.json");
var secretkey = builder.Configuration.GetSection("settings").GetSection("secretkey").ToString();
var keyBytes = Encoding.UTF8.GetBytes(secretkey);

//crear unjson web token
builder.Services.AddAuthentication(config =>
{
    config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(config =>
{

    config.RequireHttpsMetadata = false;
    config.SaveToken = true;
    config.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
        ValidateIssuer = false,
        ValidateAudience = false



    };


});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//cadena de conexion

builder.Services.AddDbContext<mateContext>(opciones =>
{
    opciones.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSQL"));
});

//cors

var MisReglasCors = "ReglasCors";
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: MisReglasCors, builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//Inyeccion de Dependencias
//Roles
builder.Services.AddScoped<IGenericRepository<Role>, RolRepository>();
builder.Services.AddScoped<IRolService, RolService>();
//Usuarios
builder.Services.AddScoped<IGenericRepository<Usuario>, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
//Pais
builder.Services.AddScoped<IGenericRepository<Pai>, PaisRepository>();
builder.Services.AddScoped<IPaisService, PaisService>();
//Intereses
builder.Services.AddScoped<IGenericRepository<Interese>, InteresesRepository>();
builder.Services.AddScoped<IInteresesService, InteresesService>();
//Idioma
builder.Services.AddScoped<IGenericRepository<Idioma>, IdiomaRepository>();
builder.Services.AddScoped<IIdiomaService, IdiomaService>();
//Datos
builder.Services.AddScoped<IGenericRepository<Dato>, DatosRepository>();
builder.Services.AddScoped<IDatosService, DatosService>();
//Nivel
builder.Services.AddScoped<IGenericRepository<Nivele>, NivelRepository>();
builder.Services.AddScoped<INivelService, NivelService>();
//Estudio
builder.Services.AddScoped<IGenericRepository<Estudio>, EstudioRepository>();
builder.Services.AddScoped<IEstudioService, EstudioService>();
//Sala
builder.Services.AddScoped<IGenericRepository<Sala>, SalaRepository>();
builder.Services.AddScoped<ISalaService, SalaService>();
//AdminSala
builder.Services.AddScoped<IGenericRepository<AdminSala>, AdminSalaRepository>();
builder.Services.AddScoped<IAdminSalaService, AdminSalaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
/*
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
*/

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(MisReglasCors); 
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
