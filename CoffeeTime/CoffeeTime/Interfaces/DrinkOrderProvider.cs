using CoffeeTime.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Interfaces
{
    public interface DrinkOrderProvider
    {
        DrinkOrder GetDrinkOrder(int id);
    }
}
