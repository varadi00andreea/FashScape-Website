using fashscape.Models;
using fashscape.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public class CartService: ICartService
    {
        private readonly ICartRepository _cartRepo;
        public CartService(ICartRepository cartRepo)
        {
            _cartRepo = cartRepo;
        }

        public async Task CreateAsync(ShoppingCart cart)
        {
            await _cartRepo.Create(cart);
        }
        public async Task<List<ShoppingCart>> GetAll()
        {
            return await _cartRepo.GetAll();
        }

        public async Task DeleteByIdAsync(int id)
        {
            await _cartRepo.Delete(id);
        }
 
    }
}
