using fashscape.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected FashscapeContext _context;
        protected DbSet<T> _dbSet;

        public GenericRepository(FashscapeContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }
        public async Task Create(T entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
        }
    }
}
