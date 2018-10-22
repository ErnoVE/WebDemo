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

        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();

            List<Customers> customers = (from c in context.Customers
                                         where c.Country == "Sweden"
                                         orderby c.City
                                         select c).ToList();

            return customers;
        }


    }
}
