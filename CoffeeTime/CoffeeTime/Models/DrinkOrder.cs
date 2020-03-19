using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeTime.Models
{
    public class DrinkOrder
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Base { get; set; }
        public string Toppings { get; set; }
        public string Sweetner { get; set; }
        public string Milk { get; set; }
        public string Temperature { get; set; }
    }
}
