using fashscape.Context;
using fashscape.DTOs;
using fashscape.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(FashscapeContext context) : base(context)
        {

        }

        public async Task UpdatePassword(UserDTO user, string newPassword)
        {
            var userUpdated = await _context.Users.FirstOrDefaultAsync(x => x.Username == user.Username && x.Password == user.Password);
            if (userUpdated != null)
            {
                userUpdated.Password = newPassword;
                await _context.SaveChangesAsync();
            }
        }
    }

}
