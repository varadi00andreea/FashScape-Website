using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Models
{
    public class Sell
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }
    }
}
