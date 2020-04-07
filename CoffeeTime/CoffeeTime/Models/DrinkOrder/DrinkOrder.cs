using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Models
{
  public class DrinkOrder
  {
    public DrinkOrder()
    {
      ToppingList = new List<Topping>();
    }
    public int Id { get; set; }
    public int Type { get; set; }
    public int BaseId { get; set; }
    public string Base { get; set; }
    public int ToppingId { get; set; }
    public int ToppingOrderId { get; set; }
    public string Topping { get; set; }
    public int SyrupId { get; set; }
    public string Syrup { get; set; }
    public int MilkId { get; set; }
    public string Milk { get; set; }
    public bool IsIced { get; set; }
    public bool IsDecaf { get; set; }
    public List<Topping> ToppingList { get; set; }
  }

  public class Topping
  {
    public int Id { get; set; }
    public int OrderId { get; set; }
    public string ToppingName { get; set; }
  }
}
