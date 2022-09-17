using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repository.UserRepository;

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
    }
}