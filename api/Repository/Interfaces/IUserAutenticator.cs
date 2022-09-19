global using api.Models;
using api.Models;

namespace api.Repository.Interfaces
{
    public interface IUserAutenticator
    {
       // Task<UserLoginModel> SearchUserLogin(int id);
        Task<UserModel> LoginUserLogin(string? senha, string? usuario);
        Task<bool> SaveChangesAsync();
    }
}