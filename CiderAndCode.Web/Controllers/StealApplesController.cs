using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CiderAndCode.Web.DataModels;
using CiderAndCode.Web.ViewModels;

namespace CiderAndCode.Web.Controllers
{
    [RoutePrefix("api/StealApples")]
    public class StealApplesController : ApiController
    {
        [Route("{id}"), HttpPost]
        public HttpResponseMessage StealAppleBushels(int id)
        {
            var db = new AppDbContext();

            db.Bushels.Remove(db.Bushels.Find(id));
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);

            //var newBushel = new Bushel
            //{
            //    Quantity = request.NumberOfBushels,
            //    User = db.Users.Find(request.UserId),
            //    Type = request.Type,
            //    Ripe = false
            //};

            //db.Bushels.Add(newBushel);
            //db.SaveChanges();

            //return Request.CreateResponse(HttpStatusCode.Created, newBushel);
        }

    }
}
