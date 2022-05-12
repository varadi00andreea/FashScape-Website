using fashscape.Context;
using fashscape.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(FashscapeContext context) : base(context)
        {
           
        }

        public async Task<Product> GetProductByName(string productName)
        {
            var product = await _context.Products.Where(p => p.Name == productName).FirstOrDefaultAsync();
            return product;
        }
    }
}

