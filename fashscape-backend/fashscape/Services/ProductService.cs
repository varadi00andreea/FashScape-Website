using fashscape.Models;
using fashscape.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepo;

        public ProductService(IProductRepository productRepo)
        {
            _productRepo = productRepo;
        }
        public async Task AddProduct(Product product)
        {
            await _productRepo.Create(product);
        }

        public async Task<List<Product>> GetAll()
        {
            return await _productRepo.GetAll();
        }

        public async Task<Product> GetProductByName(string productName)
        {
            return await _productRepo.GetProductByName(productName);
        }
    }
}
