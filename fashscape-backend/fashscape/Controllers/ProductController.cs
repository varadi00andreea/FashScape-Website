using fashscape.Models;
using fashscape.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpPost]
        public async Task<IActionResult> SellProduct(Product product)
        {
            await _productService.AddProduct(product);
            return Ok(product.Id);
        }


        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            try
            {
                return Ok(await _productService.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("/getByName")]
        public async Task<Product> GetProductByName(string productName)
        {
            return await _productService.GetProductByName(productName);

        }

        [HttpGet("/getById")]
        public async Task<Product> GetById(int id)
        {
            return await _productService.GetById(id);
        }
    }
}
