using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrinkOrderController : ControllerBase
    {
        private readonly DrinkOrderProvider _drink;
        public DrinkOrderController(DrinkOrderProvider d)
        {
            _drink = d;
        }

        [HttpGet]
        [Route("DrinkOrder/{int:id}")]
        public DrinkOrder DrinkOrder(int id)
        {
            var retMod = _drink.GetDrinkOrder(id);

            return retMod;
        }
    }
}