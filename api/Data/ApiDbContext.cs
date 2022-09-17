global using Microsoft.EntityFrameworkCore;


namespace api.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<UserModel>? usuarios { get; set; }

    }
}
