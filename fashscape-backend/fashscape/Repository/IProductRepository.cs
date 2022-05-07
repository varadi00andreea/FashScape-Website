using fashscape.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public interface IProductRepository : IGenericRepository<Product>
    {
         Task<Product> GetProductByName(string productName);
    }
}
