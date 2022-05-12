using fashscape.DTOs;
using fashscape.Models;
using fashscape.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;
        public UserService(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        public async Task CreateAsync(User user)
        {
            await _userRepo.Create(user);
        }

        public async Task<List<User>> GetAll()
        {
            return await _userRepo.GetAll();
        }
    }
}
