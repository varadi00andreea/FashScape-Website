using fashscape.DTOs;
using fashscape.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public interface IUserService
    {
        Task CreateAsync(User user);
        Task<List<User>> GetAll();
    }
}
