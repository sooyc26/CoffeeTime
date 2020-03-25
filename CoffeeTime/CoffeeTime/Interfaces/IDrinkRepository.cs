using CoffeeTime.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Interfaces
{
  public interface IDrinkRepository
  {
    DrinkOrder GetById(int id);
    DrinkOrder AddOrder(DrinkOrder add);
    DrinkOrder Update(DrinkOrder update);
    DrinkOrder Delete(int id);
    IEnumerable<DrinkOrder> GetDrinkOrders();
  }
}
