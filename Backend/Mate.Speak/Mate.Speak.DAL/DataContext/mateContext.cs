using System;
using System.Collections.Generic;
using Mate.Speak.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;


namespace Mate.Speak.DAL.DataContext
{
    public partial class mateContext : DbContext
    {
        public mateContext()
        {
        }

        public mateContext(DbContextOptions<mateContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminSala> AdminSalas { get; set; } = null!;
        public virtual DbSet<Calificacion> Calificacions { get; set; } = null!;
        public virtual DbSet<CategoriaSala> CategoriaSalas { get; set; } = null!;
        public virtual DbSet<Dato> Datos { get; set; } = null!;
        public virtual DbSet<Estudio> Estudios { get; set; } = null!;
        public virtual DbSet<Grupo> Grupos { get; set; } = null!;
        public virtual DbSet<Idioma> Idiomas { get; set; } = null!;
        public virtual DbSet<Interese> Intereses { get; set; } = null!;
        public virtual DbSet<Nivele> Niveles { get; set; } = null!;
        public virtual DbSet<Pai> Pais { get; set; } = null!;
        public virtual DbSet<Participante> Participantes { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Sala> Salas { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            /*
            if (!//optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=TECNODEXDEV;Database=mate;Encrypt=True;Integrated Security=true;TrustServerCertificate=true;");
            }*/
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminSala>(entity =>
            {
                entity.HasKey(e => e.IdAdmin);

                entity.ToTable("admin_salas");

                entity.Property(e => e.IdAdmin).HasColumnName("id_admin");

                entity.Property(e => e.Activo)
                    .HasMaxLength(1)
                    .HasColumnName("activo")
                    .IsFixedLength();

                entity.Property(e => e.IdSala).HasColumnName("id_sala");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Renglon).HasColumnName("renglon");

                entity.Property(e => e.TokenInvitado)
                    .HasMaxLength(60)
                    .HasColumnName("token_invitado")
                    .IsFixedLength();

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.AdminSalas)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK_admin_salas_idiomas");

                entity.HasOne(d => d.IdSala1)
                    .WithMany(p => p.AdminSalas)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK_admin_salas_salas");
            });

            modelBuilder.Entity<Calificacion>(entity =>
            {
                entity.HasKey(e => e.IdCalificacion);

                entity.ToTable("calificacion");

                entity.Property(e => e.IdCalificacion).HasColumnName("id_calificacion");

                entity.Property(e => e.AcordeNivel)
                    .HasMaxLength(1)
                    .HasColumnName("acorde_nivel")
                    .IsFixedLength();

                entity.Property(e => e.CalidadComunica)
                    .HasMaxLength(1)
                    .HasColumnName("calidad_comunica")
                    .IsFixedLength();

                entity.Property(e => e.CalidadRecursos)
                    .HasMaxLength(1)
                    .HasColumnName("calidad_recursos")
                    .IsFixedLength();

                entity.Property(e => e.Calificacion1)
                    .HasMaxLength(60)
                    .HasColumnName("calificacion")
                    .IsFixedLength();

                entity.Property(e => e.Comentario)
                    .HasMaxLength(250)
                    .HasColumnName("comentario")
                    .IsFixedLength();

                entity.Property(e => e.ContestaConsulta)
                    .HasMaxLength(1)
                    .HasColumnName("contesta_consulta")
                    .IsFixedLength();

                entity.Property(e => e.Duracion)
                    .HasMaxLength(1)
                    .HasColumnName("duracion")
                    .IsFixedLength();

                entity.Property(e => e.FacilComprender)
                    .HasMaxLength(1)
                    .HasColumnName("facil_comprender")
                    .IsFixedLength();

                entity.Property(e => e.InteracionaEstudiantes)
                    .HasMaxLength(1)
                    .HasColumnName("interaciona_estudiantes")
                    .IsFixedLength();

                entity.Property(e => e.NroCalificacion).HasColumnName("nro_calificacion");

                entity.Property(e => e.Otro)
                    .HasMaxLength(40)
                    .HasColumnName("otro")
                    .IsFixedLength();

                entity.Property(e => e.Retroalimentacion)
                    .HasMaxLength(1)
                    .HasColumnName("retroalimentacion")
                    .IsFixedLength();

                entity.Property(e => e.Rol)
                    .HasMaxLength(1)
                    .HasColumnName("rol")
                    .IsFixedLength();

                entity.Property(e => e.Sala)
                    .HasMaxLength(1)
                    .HasColumnName("sala")
                    .IsFixedLength();

                entity.Property(e => e.TemarioActualizado)
                    .HasMaxLength(1)
                    .HasColumnName("temario_actualizado")
                    .IsFixedLength();
            });

            modelBuilder.Entity<CategoriaSala>(entity =>
            {
                entity.HasKey(e => e.IdCategoriasala);

                entity.ToTable("categoria_sala");

                entity.Property(e => e.IdCategoriasala).HasColumnName("id_categoriasala");

                entity.Property(e => e.Categoria)
                    .HasMaxLength(60)
                    .HasColumnName("categoria")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Dato>(entity =>
            {
                entity.HasKey(e => e.IdDatos);

                entity.ToTable("datos");

                entity.Property(e => e.IdDatos).HasColumnName("id_datos");

                entity.Property(e => e.AvatarRoot)
                    .HasMaxLength(120)
                    .HasColumnName("avatar_root")
                    .IsFixedLength();

                entity.Property(e => e.Certificado)
                    .HasMaxLength(1)
                    .HasColumnName("certificado")
                    .IsFixedLength();

                entity.Property(e => e.IdCalificacion).HasColumnName("id_calificacion");

                entity.Property(e => e.IdInteres).HasColumnName("id_interes");

                entity.Property(e => e.IdPais).HasColumnName("id_pais");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Nativo).HasColumnName("nativo");

                entity.Property(e => e.NombreAvatar)
                    .HasMaxLength(75)
                    .HasColumnName("nombre_avatar")
                    .IsFixedLength();

                entity.Property(e => e.Nombrecertificado)
                    .HasMaxLength(75)
                    .HasColumnName("nombrecertificado")
                    .IsFixedLength();

                entity.Property(e => e.Telefono)
                    .HasMaxLength(60)
                    .HasColumnName("telefono")
                    .IsFixedLength();

                entity.Property(e => e.Urlcertificado)
                    .HasMaxLength(120)
                    .HasColumnName("urlcertificado")
                    .IsFixedLength();

                entity.HasOne(d => d.IdCalificacionNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdCalificacion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_calificacion");

                entity.HasOne(d => d.IdInteresNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdInteres)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_intereses");

                entity.HasOne(d => d.IdPaisNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdPais)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_pais");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_usuarios");

                entity.HasOne(d => d.NativoNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.Nativo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_idiomas");
            });

            modelBuilder.Entity<Estudio>(entity =>
            {
                entity.HasKey(e => e.IdEstudio);

                entity.ToTable("estudios");

                entity.Property(e => e.IdEstudio).HasColumnName("id_estudio");

                entity.Property(e => e.DesEstudio)
                    .HasMaxLength(60)
                    .HasColumnName("des_estudio")
                    .IsFixedLength();

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.IdNivel).HasColumnName("id_nivel");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.HasOne(d => d.IdIdiomaNavigation)
                    .WithMany(p => p.Estudios)
                    .HasForeignKey(d => d.IdIdioma)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_estudios_idiomas");

                entity.HasOne(d => d.IdNivelNavigation)
                    .WithMany(p => p.Estudios)
                    .HasForeignKey(d => d.IdNivel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_estudios_niveles");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Estudios)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_estudios_usuarios");
            });

            modelBuilder.Entity<Grupo>(entity =>
            {
                entity.HasKey(e => e.IdGrupo);

                entity.ToTable("grupos");

                entity.Property(e => e.IdGrupo).HasColumnName("id_grupo");

                entity.Property(e => e.Creador).HasColumnName("creador");

                entity.Property(e => e.Grupo1)
                    .HasMaxLength(60)
                    .HasColumnName("grupo")
                    .IsFixedLength();

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.NroParticipantes).HasColumnName("nro_participantes");

                entity.HasOne(d => d.CreadorNavigation)
                    .WithMany(p => p.Grupos)
                    .HasForeignKey(d => d.Creador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_grupos_usuarios");

                entity.HasOne(d => d.IdIdiomaNavigation)
                    .WithMany(p => p.Grupos)
                    .HasForeignKey(d => d.IdIdioma)
                    .HasConstraintName("FK_grupos_idiomas");
            });

            modelBuilder.Entity<Idioma>(entity =>
            {
                entity.HasKey(e => e.IdIdioma);

                entity.ToTable("idiomas");

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.Idiomas)
                    .HasMaxLength(60)
                    .HasColumnName("idiomas")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Interese>(entity =>
            {
                entity.HasKey(e => e.IdInteres);

                entity.ToTable("intereses");

                entity.Property(e => e.IdInteres).HasColumnName("id_interes");

                entity.Property(e => e.Intereses)
                    .HasMaxLength(60)
                    .HasColumnName("intereses")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Nivele>(entity =>
            {
                entity.HasKey(e => e.IdNivel);

                entity.ToTable("niveles");

                entity.Property(e => e.IdNivel).HasColumnName("id_nivel");

                entity.Property(e => e.Nivel)
                    .HasMaxLength(60)
                    .HasColumnName("nivel")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Pai>(entity =>
            {
                entity.HasKey(e => e.IdPais);

                entity.ToTable("pais");

                entity.Property(e => e.IdPais).HasColumnName("id_pais");

                entity.Property(e => e.CodigoPais)
                    .HasMaxLength(10)
                    .HasColumnName("codigo_pais")
                    .IsFixedLength();

                entity.Property(e => e.NombreBandera)
                    .HasMaxLength(60)
                    .HasColumnName("nombre_bandera")
                    .IsFixedLength();

                entity.Property(e => e.Pais)
                    .HasMaxLength(60)
                    .IsFixedLength();

                entity.Property(e => e.RutaImg)
                    .HasMaxLength(250)
                    .HasColumnName("ruta_img")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Participante>(entity =>
            {
                entity.HasKey(e => e.IdParticipantes);

                entity.ToTable("participantes");

                entity.Property(e => e.IdParticipantes).HasColumnName("id_participantes");

                entity.Property(e => e.Activo)
                    .HasMaxLength(1)
                    .HasColumnName("activo")
                    .IsFixedLength();

                entity.Property(e => e.IdGrupo).HasColumnName("id_grupo");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.HasOne(d => d.IdGrupoNavigation)
                    .WithMany(p => p.Participantes)
                    .HasForeignKey(d => d.IdGrupo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_participantes_grupos");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Participantes)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_participantes_usuarios");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.IdRol);

                entity.ToTable("roles");

                entity.Property(e => e.IdRol).HasColumnName("id_rol");

                entity.Property(e => e.Roles)
                    .HasMaxLength(60)
                    .HasColumnName("roles")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala);

                entity.ToTable("salas");

                entity.Property(e => e.IdSala).HasColumnName("id_sala");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(250)
                    .IsFixedLength();

                entity.Property(e => e.Fecha)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdCalificacion).HasColumnName("id_calificacion");

                entity.Property(e => e.IdCategoriasala).HasColumnName("id_categoriasala");

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.IdUsuarioCreador).HasColumnName("id_usuario_creador");

                entity.Property(e => e.NombreSala)
                    .HasMaxLength(60)
                    .HasColumnName("nombre_sala")
                    .IsFixedLength();

                entity.Property(e => e.Participantes).HasColumnName("participantes");

                entity.Property(e => e.TokenSala)
                    .HasMaxLength(60)
                    .HasColumnName("token_sala")
                    .IsFixedLength();

                entity.HasOne(d => d.IdCalificacionNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdCalificacion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_calificacion");

                entity.HasOne(d => d.IdCategoriasalaNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdCategoriasala)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_categoria_sala");

                entity.HasOne(d => d.IdUsuarioCreadorNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdUsuarioCreador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_usuarios");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.ToTable("usuarios");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Activo)
                    .HasMaxLength(1)
                    .HasColumnName("activo")
                    .IsFixedLength();

                entity.Property(e => e.Apellido)
                    .HasMaxLength(60)
                    .HasColumnName("apellido")
                    .IsFixedLength();

                entity.Property(e => e.Correo)
                    .HasMaxLength(60)
                    .HasColumnName("correo")
                    .IsFixedLength();

                entity.Property(e => e.IdRol).HasColumnName("id_rol");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(60)
                    .HasColumnName("nombre")
                    .IsFixedLength();

                entity.Property(e => e.Password)
                    .HasMaxLength(25)
                    .HasColumnName("password")
                    .IsFixedLength();

                entity.Property(e => e.Token)
                    .HasMaxLength(60)
                    .HasColumnName("token")
                    .IsFixedLength();

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(25)
                    .HasColumnName("usuario")
                    .IsFixedLength();

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_usuarios_roles");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
