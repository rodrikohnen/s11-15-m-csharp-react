using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Mate.Speak.Models;

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
        public virtual DbSet<Dato> Datos { get; set; } = null!;
        public virtual DbSet<Estudio> Estudios { get; set; } = null!;
        public virtual DbSet<Grupo> Grupos { get; set; } = null!;
        public virtual DbSet<Idioma> Idiomas { get; set; } = null!;
        public virtual DbSet<Nivele> Niveles { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Sala> Salas { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminSala>(entity =>
            {
                entity.HasKey(e => e.IdAdmin);

                entity.ToTable("admin_salas");

                entity.Property(e => e.IdAdmin).HasColumnName("id_admin");

                entity.Property(e => e.Activa)
                    .HasMaxLength(1)
                    .HasColumnName("activa")
                    .IsFixedLength();

                entity.Property(e => e.Capacidad).HasColumnName("capacidad");

                entity.Property(e => e.Fecha)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdRol).HasColumnName("id_rol");

                entity.Property(e => e.IdSala).HasColumnName("id_sala");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Renglon).HasColumnName("renglon");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.AdminSalas)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_admin_salas_roles");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.AdminSalas)
                    .HasForeignKey(d => d.IdSala)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_admin_salas_salas");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.AdminSalas)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_admin_salas_usuarios");
            });

            modelBuilder.Entity<Dato>(entity =>
            {
                entity.HasKey(e => e.IdDatos);

                entity.ToTable("datos");

                entity.Property(e => e.IdDatos).HasColumnName("id_datos");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(60)
                    .HasColumnName("apellido")
                    .IsFixedLength();

                entity.Property(e => e.AvatarRoot)
                    .HasMaxLength(120)
                    .HasColumnName("avatar_root")
                    .IsFixedLength();

                entity.Property(e => e.Correo)
                    .HasMaxLength(60)
                    .HasColumnName("correo")
                    .IsFixedLength();

                entity.Property(e => e.IdEstudio).HasColumnName("id_estudio");

                entity.Property(e => e.IdGrupo).HasColumnName("id_grupo");

                entity.Property(e => e.Identidad)
                    .HasMaxLength(20)
                    .HasColumnName("identidad")
                    .IsFixedLength();

                entity.Property(e => e.Intereses)
                    .HasMaxLength(200)
                    .HasColumnName("intereses")
                    .IsFixedLength();

                entity.Property(e => e.Nativo).HasColumnName("nativo");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(60)
                    .HasColumnName("nombre")
                    .IsFixedLength();

                entity.Property(e => e.NombreAvatar)
                    .HasMaxLength(75)
                    .HasColumnName("nombre_avatar")
                    .IsFixedLength();

                entity.Property(e => e.Pais)
                    .HasMaxLength(60)
                    .HasColumnName("pais")
                    .IsFixedLength();

                entity.Property(e => e.Sexo)
                    .HasMaxLength(10)
                    .HasColumnName("sexo")
                    .IsFixedLength();

                entity.Property(e => e.Telefono)
                    .HasMaxLength(60)
                    .HasColumnName("telefono")
                    .IsFixedLength();

                entity.HasOne(d => d.IdEstudioNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdEstudio)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_estudios");

                entity.HasOne(d => d.IdGrupoNavigation)
                    .WithMany(p => p.Datos)
                    .HasForeignKey(d => d.IdGrupo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_datos_grupos");

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

                entity.Property(e => e.IdEstudio)
                    .ValueGeneratedNever()
                    .HasColumnName("id_estudio");

                entity.Property(e => e.Certificado)
                    .HasMaxLength(1)
                    .HasColumnName("certificado")
                    .IsFixedLength();

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.IdNivel).HasColumnName("id_nivel");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Renglon).HasColumnName("renglon");

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

                entity.Property(e => e.Grupo1)
                    .HasMaxLength(60)
                    .HasColumnName("grupo")
                    .IsFixedLength();
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

                entity.Property(e => e.Disponibilidad)
                    .HasMaxLength(1)
                    .HasColumnName("disponibilidad")
                    .IsFixedLength();

                entity.Property(e => e.IdGrupo).HasColumnName("id_grupo");

                entity.Property(e => e.IdIdioma).HasColumnName("id_idioma");

                entity.Property(e => e.IdRol).HasColumnName("id_rol");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.NombreSala)
                    .HasMaxLength(60)
                    .HasColumnName("nombre_sala")
                    .IsFixedLength();

                entity.HasOne(d => d.IdGrupoNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdGrupo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_grupos");

                entity.HasOne(d => d.IdIdiomaNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdIdioma)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_idiomas");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_salas_roles");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdUsuario)
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

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(25)
                    .HasColumnName("contraseña")
                    .IsFixedLength();

                entity.Property(e => e.IdDatos).HasColumnName("id_datos");

                entity.Property(e => e.IdRol).HasColumnName("id_rol");

                entity.Property(e => e.Tockend)
                    .HasMaxLength(60)
                    .HasColumnName("tockend")
                    .IsFixedLength();

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(60)
                    .HasColumnName("usuario")
                    .IsFixedLength();

                entity.HasOne(d => d.IdDatosNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdDatos)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_usuarios_datos");

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
