using fashscape.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Context
{
    public class FashscapeContext:DbContext
    {

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sell> Sells { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\MSSQLSERVER01; Database=fashscape; Trusted_connection=true;");
            }

            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Username = "andreea12",
                    Password = "qwerty123",
                    FirstName = "Andreea",
                    LastName = "Varadi",
                    Address = "Samuel Micu, nr. 5, Alba Iulia",
                    PhoneNumber = "0745832667",
                    Email = "andreea526@gmail.com"
                });
            
        }
    }
}
