using Microsoft.EntityFrameworkCore;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.Models;
using Mate.Speak.DAL.Repository;
using Mate.Speak.BLL.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//cadena de conexion
builder.Services.AddDbContext<mateContext>(opciones =>
{
    opciones.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSQL"));
});
//Cors

var MisReglasCors = "ReglasCors";
builder.Services.AddCors(opt => 
{
    opt.AddPolicy(name: MisReglasCors, builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//Inyeccion de dependencias
builder.Services.AddScoped<IGenericRepository<Usuario>, UsuarioRepository>();
builder.Services.AddScoped<IUsuariosService, UsuariosService>();
builder.Services.AddScoped<IGenericRepository<Dato>, DatosRepository>();
builder.Services.AddScoped<IDatosService, DatosService>();
builder.Services.AddScoped<IGenericRepository<Estudio>, EstudioRepository>();
builder.Services.AddScoped<IEstudioService, EstudioService>();
builder.Services.AddScoped<IGenericRepository<Grupo>, GrupoRepository>();
builder.Services.AddScoped<IGrupoService, GrupoService>();
//

var app = builder.Build();

// Configure the HTTP request pipeline.
/*
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}*/

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(MisReglasCors);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
