using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Microsoft.AspNetCore.Cors;

namespace CoffeeTime.Controllers
{
  [EnableCors("AllowMyOrigin")]
  [Route("api/[controller]")]
  [AllowAnonymous]
  [ApiController]
  public class DrinkOrderController : ControllerBase
  {
    private readonly IDrinkRepository _drink;
    public DrinkOrderController(IDrinkRepository d)
    {
      _drink = d;

    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("DrinkOrder/{id}")]
    public IActionResult DrinkOrder(int id)
    {
      var retMod = _drink.GetById(id);

      return Ok(retMod);
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("DrinkOrders")]
    public IActionResult DrinkOrders(int id)
    {
      var retMod = _drink.GetDrinkOrders();

      return Ok(retMod);
    }
  }
}
