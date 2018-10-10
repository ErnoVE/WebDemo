using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using WebDemoTurku.Models;

namespace WebDemoTurku.Controllers
{
    [Route("api/[controller]")]    // --> "/api/customer"
    public class CustomerController : Controller
    {

        [Route("moikka")]    // --> "/api/customer/moikka"
        public string GetMoi() {
            return "Moikka!";
        }

        [Route("luvut")]     // --> "/api/customer/luvut"
        public int[] GetLuvut() {
            return new int[] { 20,21,22,23,25 };
        }

        
        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();

            List<Customers> customers = (from c in context.Customers
                                         where c.Country == "Finland"
                                         orderby c.City
                                         select c).ToList();

            return customers;
        }


    }
}
