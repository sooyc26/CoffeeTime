using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Services
{
  public class DrinkOrderService : IDrinkRepository
  {
    private readonly AppDbContext _appDbContext;

    public DrinkOrderService (AppDbContext a){
      _appDbContext = a;
    }

    public DrinkOrder AddOrder(DrinkOrder add)
    {
      _appDbContext.DrinkOrders.Add(add);
      _appDbContext.SaveChanges();
      return add;
    }

    public DrinkOrder Delete(int id)
    {
      var req = _appDbContext.DrinkOrders.Find(id);
      if (req != null)
      {
        _appDbContext.Remove(req);
        _appDbContext.SaveChanges();

      }
      return req;
    }

    public DrinkOrder GetById(int id)
    {
      return _appDbContext.DrinkOrders.Find(id);
    }

    public IEnumerable<DrinkOrder> GetDrinkOrders()
    {
      //return _appDbContext.DrinkOrders;
      return _appDbContext.DrinkOrders.FromSqlRaw<DrinkOrder>("GetDrnkOrders");
    }

    public DrinkOrder Update(DrinkOrder update)
    {

      var drink = _appDbContext.DrinkOrders.Attach(update);
      drink.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      _appDbContext.SaveChanges();
      return update;
    }
  }
}
