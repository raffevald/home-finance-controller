global using api.Models;

namespace api.Repository.UserRepository
{
    public interface IUserRepository
    {
        Task<IEnumerable<UserModel>> SearchUserModel();
        Task<UserModel> SearchUserModel(int id);
        void AddUserModel(UserModel userModel);
        void UpdateUserModel(UserModel userModel);

        void DeleteUserModel(UserModel userModel);

        Task<bool> SaveChangesAsync();
    }
}