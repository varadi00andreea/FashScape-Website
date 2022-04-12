using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Models
{
    public class Order
    {
        public int Id { get; set; }
        public ShoppingCart ShoppingCart { get; set; }
        public Product Product { get; set; }
    }
}
