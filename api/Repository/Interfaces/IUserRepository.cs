global using api.Models;

namespace api.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<UserModel>> SearchUserModel();
        Task<UserModel> SearchUserModel(int id);
        void AddUserModel(UserModel userModel);
        void UpdateUserModel(UserModel userModel);
        void DeleteUserModel(UserModel userModel);
       // Task<UserModel> LoginUserLogin(string? senha, string? usuario);
      //  void LoginUserLogin(string? senha, string? usuario);
        Task<bool> SaveChangesAsync();
    }
}