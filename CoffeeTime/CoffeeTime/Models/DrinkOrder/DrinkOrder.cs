using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Models
{
    public class DrinkOrder
    {
        public int Id { get; set; }
        public int Type { get; set; }
        public int Base { get; set; }
        public int Toppings { get; set; }
        public int Sweetner { get; set; }
        public int Milk { get; set; }
        public int Temperature { get; set; }
    }
}
