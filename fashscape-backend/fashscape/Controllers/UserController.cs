using fashscape.Models;
using fashscape.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace fashscape.Controllers
{   [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user)
        {
            await _userService.CreateAsync(user);
            return Ok(user.Id);
        }
        
    }
}
