using Microsoft.AspNetCore.Mvc;
using api.Repository.Interfaces;

namespace api.Controllers.UserController
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _repository.SearchUserModel();
            return users.Any()
                ? Ok(users)
                : NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserModel userModel)
        {
            _repository.AddUserModel(userModel);
            return await _repository.SaveChangesAsync()
                ? Ok("Usuario adicionado com sucesso.")
                : BadRequest("Falha ao adicionar o usuario.");
        } 

    }
}