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
        [Route("luvut")]     // --> "/api/customer/luvut"
        public int[] GetLuvut()
        {
            return new int[] { 20, 21, 22, 23, 25 };
        }

        [Route("Client")] // --> "/api/Customer/Client"
        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();
            try
            {

                List<Customers> customers = (from c in context.Customers
                                             where c.Country == "Sweden"
                                             orderby c.City
                                             select c).ToList();

                return customers;
            }
            finally
            {
                context.Dispose();
            }
        }

    }
}
