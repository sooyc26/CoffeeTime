using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Services
{
    public class DrinkOrderService: DrinkOrderProvider
    {
        public DrinkOrder GetDrinkOrder(int id)
        {
            var retMod = new DrinkOrder();

            //try using entity to connect to DB
            return retMod;
        }
    }
}
