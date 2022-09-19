using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.Repository.Interfaces;

namespace api.Repository.UserAutenticator
{
    public class UserAutenticator : IUserAutenticator
    {
        private readonly ApiDbContext _context;
        public UserAutenticator(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<UserModel> LoginUserLogin(string? senha, string? usuario)
        {
            UserModel? userLogin = 
                await _context.usuarios.Where(x => x.usuario == usuario && x.senha == senha ).FirstOrDefaultAsync();
            
            return userLogin;
        }

        async Task<bool> IUserAutenticator.SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}
