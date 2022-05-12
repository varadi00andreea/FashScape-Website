using fashscape.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public interface ICartService
    {
        Task CreateAsync(ShoppingCart cart);
        Task<List<ShoppingCart>> GetAll();
        Task DeleteByIdAsync(int id);
    }
}
