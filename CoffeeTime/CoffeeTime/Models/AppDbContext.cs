using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Models
{
  public class AppDbContext: DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
    {

    }
      public DbSet<DrinkOrder> DrinkOrders { get; set; }
  }
}
