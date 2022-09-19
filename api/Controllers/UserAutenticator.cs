using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repository.Interfaces;

namespace api.Controllers.UserAutenticator
{
    [ApiController]
    [Route("api/userLogin")]
    public class UserAutenticator : ControllerBase {
        private readonly IUserAutenticator _repository;

        public UserAutenticator(IUserAutenticator repository) {
            _repository = repository;
        }
        
        [HttpPost]
        public async Task<IActionResult> Post(UserAutenticatorModel userCredencial) {
            if (userCredencial.senha != null && userCredencial.usuario != null) {
                var user = await _repository.LoginUserLogin(userCredencial.senha, userCredencial.usuario);
                return user != null
                ? Ok(true)
                : NotFound();
            }
            return NotFound();
        } 
    }
}
