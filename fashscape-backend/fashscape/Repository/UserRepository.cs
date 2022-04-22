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

        
    }
    
}
