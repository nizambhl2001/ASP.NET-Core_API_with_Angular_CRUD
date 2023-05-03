using Microsoft.EntityFrameworkCore;

namespace WebApplication3.Models
{
    public class StudentDbContext :DbContext

    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {
        }
        public DbSet<Student> Student { get; set; }
    }
}
