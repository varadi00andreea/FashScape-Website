using fashscape.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public interface IProductService
    {
        Task AddProduct(Product product);
        Task<List<Product>> GetAll();
        Task<Product> GetProductByName(string producName);
        Task<Product> GetById(int id);
    }
}
