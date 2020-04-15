using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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

    public List<DrinkOrder> GetDrinkOrders()
    {
      var resp = _appDbContext.DrinkOrders.FromSqlRaw("EXECUTE dbo.DrinkOrders_Select_All").AsNoTracking();
      return GroupToppings(resp);
    }

    private List<DrinkOrder> GroupToppings(IQueryable<DrinkOrder> ordersData)
    {
      var dataToList = ordersData.ToList();
      var groupOrder = dataToList.GroupBy(x => new
      {
        x.Id,
        x.Type,
        x.BaseId,
        x.Base,
        x.SyrupId,
        x.Syrup,
        x.MilkId,
        x.Milk,
        x.IsIced,
        x.IsDecaf,

      }).Select(y => new DrinkOrder
      {
        Id = y.Key.Id,
        Type = y.Key.Type,
        Base = y.Key.Base,
        BaseId = y.Key.BaseId,
        SyrupId = y.Key.SyrupId,
        Syrup = y.Key.Syrup,
        MilkId = y.Key.MilkId,
        Milk = y.Key.Milk,
        IsIced = y.Key.IsIced,
        IsDecaf = y.Key.IsDecaf,

        ToppingList = y.Select(k=>new Topping {
          Id = k.ToppingId,
          ToppingName = k.Topping,
          OrderId = k.ToppingOrderId
        }).ToList()

      }).ToList();
      

      return groupOrder;

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
