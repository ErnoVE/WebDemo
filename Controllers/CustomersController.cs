using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using WebDemoTurku.Models;

namespace WebDemoTurku.Controllers
{
    [Route("api/[controller]")]    // --> "/api/Customer"
    public class CustomerController : Controller
    {

        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();
            try
            {

                List<Customers> Customer = (from c in context.Customers
                                            where c.Country == "Finland"
                                            orderby c.City
                                            select c).ToList();

                return Customer;
            }
            finally
            {
                context.Dispose();
            }
        }

    }
}
