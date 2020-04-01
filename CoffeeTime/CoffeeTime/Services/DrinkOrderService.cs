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

    public List<DrinkOrder> GetDrinkOrders()
    {
      var resp = _appDbContext.DrinkOrders.FromSqlRaw("DrinkOrders_Select_All").ToList();

      return GroupToppings(resp);
    }

    private List<DrinkOrder> GroupToppings(List<DrinkOrder> ordersData)
    {
      var groupOrder = ordersData.GroupBy(x => new
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

        x.ToppingId,
        x.Topping,
        x.ToppingOrderId

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

        ToppingList = ordersData.GroupBy(a => new
        {
          a.ToppingOrderId,
          a.ToppingId,
          a.Topping
        })
        .Select(b => new Topping
        {
          Id = b.Key.ToppingId,
          OrderId=b.Key.ToppingOrderId,
          ToppingName = b.Key.Topping
        }).Where(z => z.OrderId == y.Key.Id).ToList()
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
