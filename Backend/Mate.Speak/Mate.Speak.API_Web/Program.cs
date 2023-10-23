using Mate.Speak.BLL.Services;
using Mate.Speak.DAL.DataContext;
using Mate.Speak.DAL.Repository;
using Mate.Speak.Models;
using Microsoft.EntityFrameworkCore;

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
builder.Services.AddScoped<IGenericRepository<Role>, RolRepository>();
builder.Services.AddScoped<IRolService, RolService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(MisReglasCors); 
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
