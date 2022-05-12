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

            //Products

            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Baggy Jeans",
                    Description = "Popular from the early 1990s to the mid 2000s, baggy jeans are back in style. They have a cool factor to them that makes even the simplest wardrobes come to life.",
                    Price = 89.99,
                    Size="38"
                },
                new Product
                {
                    Id = 2,
                    Name = "Casual Dress",
                    Description = "Perfect for summer days. Very soft material.",
                    Price = 47,
                    Size="Universal"
                },
                new Product
                {
                    Id = 3,
                    Name = "Pink Crop Top",
                    Description = "I've recently buyed it but it's not the right size. I have to say it's not very stretchy.",
                    Price = 62.30,
                    Size="S"
                },
                new Product
                {
                    Id = 4,
                    Name = "Gown",
                    Description = "Perfect for a summerish wedding.",
                    Price = 326.99,
                    Size="36-38"
                },
                new Product
                {
                    Id = 5,
                    Name = "Gym Leggings",
                    Description = "Form-flattering that provides ultimate comfort in high intensity workout.",
                    Price = 89.90,
                    Size="S"
                },
                new Product
                {
                    Id=6,
                    Name="Black Flared Jeans",
                    Description="Great if you are looking for a fashion forward twist on classic denim jeans.",
                    Price=120.99,
                    Size="40"
                },
                new Product
                {
                    Id=7,
                    Name="Knee High Boots",
                    Description= "Knee high boots are a staple in every wardrobe.",
                    Price=200,
                    Size="39"
                },
                new Product
                {
                    Id=8,
                    Name="Split Maxi Dress",
                    Description="Very nice color. It looks good on anyone.",
                    Price=170,
                    Size="M"
                },
                new Product
                {
                    Id=9,
                    Name="Sandals",
                    Description="High heeled sandals. You can wear them for a casual look or even for a party.",
                    Price=219.90,
                    Size="37"
                }
                
                );
            
        }
    }
}
