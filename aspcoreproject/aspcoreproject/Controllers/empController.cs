using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using aspcoreproject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace aspcoreproject.Controllers
{
    [ApiController]
    public class empController : Controller
    {
        tbtempContext obj = new tbtempContext();
        // GET: api/<controller>
        [HttpGet("[action]")]
        [Route("api/emp/Disp_Rec")]
        public IEnumerable<Tbemp> Disp_Rec()
        {
            return obj.Tbemp.ToList();
        }
        // GET api/<controller>/5
        [HttpGet]
        [Route("api/emp/Find_Rec/{id}")]
        public Tbemp Find_Rec(int id)
        {
            return obj.Tbemp.Find(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("api/emp/Save_Rec")]
        public Int32 Save_Rec([FromBody]Tbemp employee)
        {
            obj.Tbemp.Add(employee);
            obj.SaveChanges();
            return 1;
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("api/emp/Update_Rec")]
        public Int32 Update_Rec([FromBody]Tbemp employee)
        {
            obj.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            obj.SaveChanges();
            return 1;
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("api/emp/Delete_Rec/{id}")]
        public Int32 Delete_Rec(int id)
        {
            Tbemp p = obj.Tbemp.Find(id);
            obj.Entry(p).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            obj.SaveChanges();
            return 1;
        }
        // GET: api/<controller>
        //[HttpGet]
        //[Route("api/emp/Disp_Rec")]
        //public IEnumerable<Tbemp> Disp_Rec()
        //{
        //    return obj.Tbemp.ToList();
        //}

        // GET api/<controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
