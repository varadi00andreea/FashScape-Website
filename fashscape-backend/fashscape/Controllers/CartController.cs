using fashscape.DTOs;
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
    public class CartController : Controller
    {
        private readonly ICartService _cartService;
        private readonly IProductService _productService;
        public CartController(ICartService cartService, IProductService productService)
        {
            _cartService = cartService;
            _productService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(Product p)
        {
            ShoppingCart cart = new ShoppingCart();
            var product = await _productService.GetById(p.Id);
            if (product != null)
            {
                cart.ProductId = product.Id;
                await _cartService.CreateAsync(cart);
                return Ok(cart);
            }
            else return BadRequest("Can't find product");
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetShoppingCartProducts()
        {
            List<Product> productsInCart = new List<Product>();
            var products = await _productService.GetAll();
            var shoppingCart = await _cartService.GetAll();

            foreach (var item in shoppingCart)
            {
                foreach (var p in products)
                {
                    if (item.ProductId == p.Id)
                    {
                        productsInCart.Add(p);
                    }
                }
            }
            return productsInCart;

        }

        [HttpGet("/getCart")]
        public async Task<ActionResult<List<ShoppingCart>>> GetCart()
        {

            try
            {
                return Ok(await _cartService.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteProductFromCart(int id)
        {
            await _cartService.DeleteByIdAsync(id);
            return Ok($"Product from cart with id {id} was deleted");
        }


    }
}
