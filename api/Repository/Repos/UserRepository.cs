using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.Repository;

namespace api.Repository.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApiDbContext _context;
        public UserRepository(ApiDbContext context)
        {
            _context = context;
        }

        void IUserRepository.AddUserModel(UserModel userModel)
        {
            throw new NotImplementedException();
        }

        void IUserRepository.UpdateUserModel(UserModel userModel)
        {
            throw new NotImplementedException();
        }

        async Task<IEnumerable<UserModel>> IUserRepository.SearchUserModel()
        {
            return await _context.usuarios.ToListAsync();
        }

        Task<UserModel> IUserRepository.SearchUserModel(int id)
        {
            throw new NotImplementedException();
        }

        void IUserRepository.DeleteUserModel(UserModel userModel)
        {
            throw new NotImplementedException();
        }

        async Task<bool> IUserRepository.SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}