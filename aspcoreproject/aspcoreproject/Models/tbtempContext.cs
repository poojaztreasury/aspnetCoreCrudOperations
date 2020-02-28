using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace aspcoreproject.Models
{
    public partial class tbtempContext : DbContext
    {
        public tbtempContext()
        {
        }

        public tbtempContext(DbContextOptions<tbtempContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tbemp> Tbemp { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=tbtemp;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Tbemp>(entity =>
            {
                entity.HasKey(e => e.eid)
                    .HasName("PK__tbemp__D9509F6D2A9B3FF9");

                entity.ToTable("tbemp");

                entity.Property(e => e.eid)
                    .HasColumnName("eid")
                    .ValueGeneratedNever();

                entity.Property(e => e.edept)
                    .HasColumnName("edept")
                    .HasMaxLength(10);

                entity.Property(e => e.ename)
                    .HasColumnName("ename")
                    .HasMaxLength(10);

                entity.Property(e => e.esalary).HasColumnName("esalary");
            });
        }
    }
}
