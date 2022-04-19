﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fashscape.Repository
{
    public interface IGenericRepository<T> where T:class
    {
        Task Create(T entity);
    }
}
