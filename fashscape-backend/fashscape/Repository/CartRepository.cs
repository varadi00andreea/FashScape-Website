using fashscape.Context;
using fashscape.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public class CartRepository : GenericRepository<ShoppingCart>, ICartRepository
    {
        public CartRepository(FashscapeContext context) : base(context)
        {
           
        }
    }
}
